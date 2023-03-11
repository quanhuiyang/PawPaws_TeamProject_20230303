import { React, useEffect, useState } from 'react'
import './hotelBookingInfo.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import cities from '../../../Abby/pages/cityData/cities'
import districts from '../../../Abby/pages/cityData/districts'
import HeaderForm from '../../../Abby/components/HeaderForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { auth, provide } from '../../../pages/config/firebase'
import { signOut, GoogleAuthProvider } from 'firebase/auth'

export default function HotelBookingInfo() {
  const navigate = useNavigate()

  //設定城市.區域地址
  const [city, setCity] = useState(cities[0])
  const [district, setDistrict] = useState(districts['城市'][0])

  const handleCityChange = async (value) => {
    await setCity(value)
    await setDistrict(districts[value][0])
  }

  const handleDistrictChange = async (value) => {
    await setDistrict(value)
  }

  //儲存編輯頁面的 input value
  const [email, setEmail] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [userName, setUserName] = useState('')
  const [mobile, setMobile] = useState('')
  const [address3, setAddress3] = useState('')

  //月份選單
  const makeOptions = (min, max) => {
    const options = []

    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }
    return options
  }

  async function handleSubmit(e) {
    e.preventDefault()

    let user = {}
    const local = localStorage.getItem('user')

    try {
      if (local) {
        user = JSON.parse(local)
      }
    } catch (ex) {}

    const birthday = new Date(user.birthday)
    //城市與區域地址之間+逗號
    let addressAll = []
    if (user.address) {
      addressAll = user.address.split(',')
    }

    const fullAddress = `${city === '城市' ? '' : city},${
      district === '區域' ? '' : district
    },${address3}`

    let isSameData =
      user.name === userName &&
      user.mobile === mobile &&
      user.birthday === `${year}-${month}-${day}` &&
      user.address === fullAddress

    const data = {
      name: userName,
      email,
      birthday: `${year}-${month}-${day}`,
      mobile: mobile,
      address: fullAddress,
    }

    if (!isSameData) {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/members/update`,
        data
      )

      localStorage.setItem('user', JSON.stringify(data))

      //編輯成功
      if (response.data.state) {
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // localStorage.setItem('email', response.data.userInfo.email)
          localStorage.setItem('user', JSON.stringify(response.data.userInfo))
        })
        //
      } else {
        Swal.fire({
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        })
        // setAlert({ state: true, message: response.data.message })
      }
    } else {
      Swal.fire('您沒有修改資料')
    }
  }

  //編輯會員頁面-資料自動代入欄位
  useEffect(() => {
    showUserOriginalInfo(false)
  }, [])

  function showUserOriginalInfo(isCancel) {
    let user = {}
    const local = localStorage.getItem('user')

    try {
      if (local) {
        user = JSON.parse(local)
      }
    } catch (ex) {}

    const birthday = new Date(user.birthday)

    let addressAll = []
    if (user.address) {
      addressAll = user.address.split(',')
      handleCityChange(addressAll[0])
      handleDistrictChange(addressAll[1])
    } else {
      handleCityChange('城市')
    }

    setEmail(user.email || '')
    setUserName(user.name || '')
    setMobile(user.mobile || '')
    if (user.birthday !== '1899-11-29T16:00:00.000Z') {
      setYear(birthday.getFullYear() || '')
      setMonth(birthday.getMonth() + 1 || '')
      setDay(birthday.getDate() || '')
    }

    if (addressAll[0]) {
      handleCityChange(addressAll[0])
    }
    if (addressAll[1]) {
      console.log('addressAll[1]', addressAll[1])
      setTimeout(() => {
        handleDistrictChange(addressAll[1])
      }, 100)
    }
    setAddress3(addressAll[2] || '')

    if (isCancel) {
      Swal.fire('已回復原始資料')
    }
  }

  return (
    <div className="hotelBookingInfoContainer">
      <memberForm onSubmit={(e) => handleSubmit(e)}>
        <div className="form-area-edit">
          <div className="form-body">
            <div className="profileArea">
              <div className="profileName">
                <AccountCircleIcon />
                {email}
              </div>
              <button
                type="button"
                className="member-button logoutBtn"
                onClick={() => {
                  localStorage.removeItem('token')
                  localStorage.removeItem('user')
                  localStorage.removeItem('email')
                  localStorage.removeItem('googleAuth')
                  navigate('/members')
                  Swal.fire({
                    icon: 'success',
                    title: '登出成功!',
                    showConfirmButton: false,
                    timer: 1500,
                  })
                }}
              >
                會員登出
              </button>
            </div>

            <div className="group">
              <input
                type="text"
                name="UserName"
                id="UserName"
                value={userName}
                placeholder="請輸入姓名"
                onChange={(e) => setUserName(e.target.value)}
              />
              {/** 
              <div className="group">
                <input type="text" name="email" id="email" placeholder="請輸入email" required />
              </div>
              */}
              {localStorage.getItem('googleAuth') ? (
                ''
              ) : (
                <span>
                  <Link to="/NewPwd" style={{ textDecoration: 'none' }}>
                    設定新密碼
                  </Link>
                </span>
              )}

              <div className="group">
                <select
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value)
                    // 為了避免再次選年or月，要先清空日的選擇state
                    // setDay('')
                  }}
                >
                  <option>我的出生年</option>
                  {makeOptions(1940, 2015).map((v, i) => {
                    return (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    )
                  })}
                </select>
                <select
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value)
                  }}
                >
                  <option>月份</option>
                  {makeOptions(1, 12).map((v, i) => {
                    return (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    )
                  })}
                </select>
                <select value={day} onChange={(e) => setDay(e.target.value)}>
                  <option>日期</option>
                  {year !== '' &&
                    month !== '' &&
                    makeOptions(1, new Date(year, month, 0).getDate()).map(
                      (v, i) => {
                        return (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        )
                      }
                    )}
                </select>
              </div>
              <div className="group">
                <input
                  value={mobile}
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="請輸入手機號碼"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="group">
                <select
                  onChange={(e) => handleCityChange(e.target.value)}
                  value={city}
                >
                  {cities.length > 0 &&
                    cities.map((c, i) => {
                      const jsx = (
                        <option key={i} value={c} disabled hidden>
                          {c}
                        </option>
                      )

                      const jsx2 = (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      )
                      return i === 0 ? jsx : jsx2
                    })}
                </select>
                <select
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  value={district}
                >
                  {districts[city].map((d, i) => {
                    return (
                      <option key={i} value={d}>
                        {d}
                      </option>
                    )
                  })}
                </select>
                <div className="group">
                  <input
                    value={address3}
                    type="text"
                    placeholder="請輸入詳細地址"
                    onChange={(e) => setAddress3(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-submit-area">
            <button
              type="button"
              onClick={() => {
                showUserOriginalInfo(true)
              }}
              className="cancel-btn twoBtns"
            >
              取消
            </button>
            <button type="submit" className="join-btn twoBtns">
              儲存修改
            </button>
          </div>
        </div>
      </memberForm>
      <hotelForm>123</hotelForm>
    </div>
  )
}

// import React from 'react'
// import './hotelBookingInfo.css'

// function HotelBookingInfo() {
//   return (
//     <>
//       <div className="hotelBookingInfoContainer">
//         <div className="hotelBookingMember">Member</div>
//         <div className="hotelBookingHotel">hotel</div>
//       </div>
//     </>
//   )
// }

// export default HotelBookingInfo
