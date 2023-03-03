import { useState } from 'react'
import GoogleButton from 'react-google-button'
import LoginCSS from './LoginBtn.module.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import md5 from 'md5'
import Swal from 'sweetalert2'
// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// require("dotenv").config({ path: __dirname + "/dev.env" });
// require('dotenv').config({ path: 'http://localhost:3001/.env' });

function Login() {
  const [inputData, setInputData] = useState({})

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
    const response = await axios.post(`http://localhost:3000/members/login`, {
      userEmail,
      userPassword: encryption,
    })

    console.log('response', response)

    if (response.data.state) {
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: '成功登入!',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        localStorage.setItem('email', response.data.userInfo.email)
        localStorage.setItem('user', JSON.stringify(response.data.userInfo))
        window.location = '/memberInfo'
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
      <div className="container">
        <form onSubmit={handleSignin}>
          <div className="form-area">
            <div className="form-header">
              <button className={LoginCSS.registerBtn + ' member-button'}>
                {' '}
                <Link to="/Register">註冊</Link>
              </button>
              <button className={LoginCSS.loginBtn + ' member-button'}>
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
                  <Link to="/memberFgPwd">忘記密碼</Link>
                </div>
              </div>
            </div>
            <div className="loginArea">
              <button className="login-btn member-button">登入</button>
            </div>
            <div className="google-btn">
              <GoogleButton
                type="dark"
                label="Sign up with Google"
                style={{ width: 200 }}
                onClick={() => {
                  console.log('Google button clicked')
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
