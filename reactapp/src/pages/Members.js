import { useState, useEffect } from 'react'
import GoogleButton from 'react-google-button'
import LoginCSS from './LoginBtn.module.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import md5 from 'md5'
import Swal from 'sweetalert2'
import AuthService from '../Abby/auth.service'
import { useNavigate } from 'react-router-dom'
import { auth, provide } from './config/firebase'
import { signInWithPopup } from 'firebase/auth'
// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// require("dotenv").config({ path: __dirname + "/dev.env" });
// require('dotenv').config({ path: 'http://localhost:3001/.env' });

function Members() {
  const navigate = useNavigate()

  const login = async () => {
    const result = await signInWithPopup(auth, provide)
    console.log(result)

    const userInfo = { ...result.user, name: result.user.displayName }
    localStorage.setItem('user', JSON.stringify(userInfo))
    localStorage.setItem('googleAuth', true)
    console.log('userInfo', userInfo)

    const response = await AuthService.register({
      email: result.user.email,
      password: 'googleAuth',
      name: result.user.displayName,
    })

    console.log(response)

    console.log('response?.user', response.data?.user)
    if (!response.data?.state && response.data?.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user[0]))
    }

    navigate('/memberInfo')
  }

  const [inputData, setInputData] = useState({})

  useEffect(() => {
    console.log('members auth', auth)
    ;(async function () {
      const response = await AuthService.checklogin({
        token: localStorage.getItem('token'),
      })
      if (response.data.state) {
        navigate('/memberInfo')
      }
    })()
  }, [])

  const handleInputData = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    })
  }
  const handleSignin = async (event) => {
    event.preventDefault()
    console.log('inputData', inputData)
    // console.log(process.env.NODE_API_URL);
    const { userEmail, userPassword } = inputData
    const encryption = md5(userPassword)
    if (userEmail === '' || userPassword === '') return
    const response = await AuthService.login({
      userEmail,
      userPassword: encryption,
    })

    console.log('response', response)

    if (response.data.state) {
      Swal.fire({
        icon: 'success',
        title: '成功登入!',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        localStorage.setItem('email', response.data.userInfo.email)
        localStorage.setItem('user', JSON.stringify(response.data.userInfo))
        localStorage.setItem('token', response.data.token)
        navigate('/memberInfo')
      })
      //
    } else {
      Swal.fire({
        title: '登入失敗!',
        icon: 'error',
        confirmButtonText: 'Cool',
      })
      // setAlert({ state: true, message: response.data.message })
    }
  }
  return (
    <>
      <div className="container abby">
        <form onSubmit={handleSignin}>
          <div className="form-area">
            <div className="form-header">
              <Link to="/Register">
                <button
                  type="button"
                  className={LoginCSS.registerBtn + ' member-button'}
                >
                  {' '}
                  註冊
                </button>
              </Link>
              <button
                type="button"
                className={LoginCSS.loginBtn + ' member-button'}
              >
                登入
              </button>
            </div>

            <div className="form-body">
              <div className="s1">
                <div className="group">
                  <input
                    type="text"
                    name="userEmail"
                    id="userEmail"
                    placeholder="請輸入email"
                    onChange={handleInputData}
                    required
                  />
                </div>
                <div className="group">
                  <input
                    name="userPassword"
                    type="password"
                    id="password"
                    placeholder="請輸入密碼"
                    onChange={handleInputData}
                    required
                  />
                </div>
                <div className="forgetpwd-btn">
                  <Link to="/forgetPwd">忘記密碼</Link>
                </div>
              </div>
            </div>
            <div className="loginArea member-button">
              <button className="login-btn member-button">登入</button>
            </div>
            <div className="google-btn">
              <GoogleButton
                type="dark"
                label="Sign up with Google"
                style={{ width: 200 }}
                onClick={() => {
                  login()
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Members
