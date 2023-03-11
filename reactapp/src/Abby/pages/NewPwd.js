import { useEffect, useState } from 'react'
import './members.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs'
import AuthService from '../auth.service'
import md5 from 'md5'
import Swal from 'sweetalert2'
import { borderRadius, style } from '@mui/system'

const LinkClassName = {
  textDecoration: 'none',
  color: '#868686',
}
const NewPwdTitle = {
  margin: 0,
}

function NewPwd() {
  const navigate = useNavigate()

  const [page, setPage] = useState(0)
  const [token, setToken] = useState('')
  const [data, setData] = useState({})

  const location = useLocation()

  const tryParseInt = (value) => {
    const result = parseInt(value)
    return isNaN(result) ? value : result
  }
  const parseObjectValues = (obj = {}) => {
    Object.keys(obj).forEach((k) => {
      obj[k] = tryParseInt(obj[k])
    })

    return obj
  }

  useEffect(() => {
    const value = parseObjectValues(
      qs.parse(location.search, { ignoreQueryPrefix: true }) || {}
    )

    if (value.key) {
      setToken(value.key)
      setData({ ...data, token: value.key })
    } else {
      setData({ ...data, token: localStorage.getItem('token') })
    }
  }, [])

  const handleFieldChange = (e) => {
    //以下依照通用三步驟原則來更新狀態
    setData({ ...data, [e.target.name]: md5(e.target.value) })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await AuthService.changePassword({
      data,
    })
    if (response.data.state) {
      Swal.fire({
        icon: 'success',
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate('/members')
      })
    } else {
      Swal.fire({
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      })
    }
    console.log('response', response)
  }

  return (
    <>
      <div className="container">
        {token === '' ? (
          <div className="formHeader">
            <button className="top-info-btn member-button">個人資訊</button>
            <button className="top-order-btn member-button">訂單查詢</button>
            <button className="top-likes-btn member-button">我的追蹤</button>
          </div>
        ) : (
          ''
        )}

        <form onSubmit={handleSubmit}>
          <input type="text" name="token" value={token} hidden />
          <div className="form-area-edit">
            <div className="form-body">
              <div>
                <p style={NewPwdTitle}>設定新密碼</p>
                <div className="group">
                  {token === '' ? (
                    <input
                      type="password"
                      name="oldPassword"
                      placeholder="請輸入舊密碼"
                      onChange={(e) => {
                        handleFieldChange(e)
                      }}
                      required
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div className="group">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="請輸入新密碼"
                    onChange={(e) => {
                      handleFieldChange(e)
                    }}
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="password"
                    name="newPassword2"
                    placeholder="請再次確認密碼"
                    onChange={(e) => {
                      handleFieldChange(e)
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-submit-area">
              {token === '' ? (
                <button
                  type="button"
                  className="rewrite-btn twoBtns"
                  onClick={() => navigate('/memberInfo')}
                >
                  回上一頁
                </button>
              ) : (
                ''
              )}

              <button type="submit" className="join-btn twoBtns">
                儲存送出
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPwd
