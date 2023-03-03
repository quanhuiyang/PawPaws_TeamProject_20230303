import { React, useEffect, useState } from 'react'
import './Edit.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import { useTwZipCode, cities, districts } from 'use-tw-zipcode'
import HeaderForm from '../components/HeaderForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Edit() {
  const navigate = useNavigate()

  const { city, district, zipCode, handleCityChange, handleDistrictChange } =
    useTwZipCode()

  const [email, setEmail] = useState('')
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [userName, setUserName] = useState('')
  const [mobile, setMobile] = useState('')
  const [address3, setAddress3] = useState('')

  console.log('year', year)
  console.log('month', month)
  console.log('day', day)
  console.log('BirthDay:', `${year}-${month}-${day}`)

  const makeOptions = (min, max) => {
    const options = []

    for (let i = min; i < max + 1; i++) {
      options.push(i)
    }

    return options
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('year', year)
    console.log('month', month)
    console.log('day', day)
    console.log('name', userName)
    console.log('BirthDay:', `${year}-${month}-${day}`)
    console.log('mobile', mobile)

    const data = {
      name: userName,
      email,
      birthday: `${year}-${month}-${day}`,
      mobile: mobile,
      address: city + ',' + district + ',' + address3,
    }
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/members/update`,
      data
    )

    localStorage.setItem('user', JSON.stringify(data))
    console.log('response', response)
  }

  //編輯會員頁面-資料自動代入欄位
  useEffect(() => {
    let user = {}
    const local = localStorage.getItem('user')

    try {
      if (local) {
        user = JSON.parse(local)
      }
    } catch (ex) {}
    console.log('user', user)
    const birthday = new Date(user.birthday)
    let addressAll = []
    if (user.address) {
      addressAll = user.address.split(',')
    }

    setEmail(user.email || '')
    setUserName(user.name || '')
    setMobile(user.mobile || '')
    setYear(birthday.getFullYear() || '')
    setMonth(birthday.getMonth() + 1 || '')
    setDay(birthday.getDate() || '')

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
  }, [])

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-area-edit">
        <div className="form-body">
          <div className="profileArea">
            <div className="profileName">
              <AccountCircleIcon />
              {email}
            </div>
            <button
              className="member-button"
              onClick={() => {
                alert('登出成功！跳轉到登入頁！')
                navigate('/members')
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
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            {/** 
            <div className="group">
               <input type="text" name="email" id="email" placeholder="請輸入email" required />
            </div>
            */}
            <span>
              <Link to="/NewPwd" style={{ textDecoration: 'none' }}>
                設定新密碼
              </Link>
            </span>
            <div className="group">
              <select
                value={year}
                onChange={(e) => {
                  setYear(e.target.value)
                  // 為了避免再次選年or月，要先清空日的選擇state
                  setDay('')
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
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="group">
              <select
                onChange={(e) => handleCityChange(e.target.value)}
                value={city}
              >
                {cities.map((c, i) => {
                  return (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  )
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
                  required
                  onChange={(e) => setAddress3(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-submit-area">
          <button type="reset" className="cancel-btn member-button">
            取消
          </button>
          <button type="submit" className="join-btn member-button">
            儲存修改
          </button>
        </div>
      </div>
    </form>
  )
}
