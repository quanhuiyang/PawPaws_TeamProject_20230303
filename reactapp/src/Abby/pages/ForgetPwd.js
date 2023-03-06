import { useState, useRef } from 'react'
import './members.scss'
import { Link } from 'react-router-dom'
import { ForgetPwdEmail } from '../components/ForgetPwdEmail'

import emailjs from '@emailjs/browser'
import AuthService from '../auth.service'

const forgetpwdTitle = {
  margin: 0,
}
const formFogetPwd = {
  borderRadius: '10px',
}

function ForgetPwd() {
  const form = useRef()
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault()

    console.log('email', email)
    const response = await AuthService.forgetPassword({
      email: email,
    })
    console.log(response)

    if (response.data.state) {
      setToken(response.data.token)

      setTimeout(() => {
        emailjs
          .sendForm(
            'service_a5s2e7t',
            'template_pu0w9xn',
            form.current,
            'oEcYPjwbY8AMtRWeB'
          )
          .then(
            (result) => {
              console.log(result.text)
            },
            (error) => {
              console.log(error.text)
            }
          )
      }, 0)
    } else if (response.data.error === 'googleAuth') {
      alert(response.data.message)
    }
  }

  return (
    <>
      {/* <ForgetPwdEmail /> */}
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="token" value={token} hidden />
          {/* <input type="text" name="from_name" value="PawPaws" hidden />
          <input
            type="text"
            name="message"
            value="Here is your reset password url:  http://localhost:3001/NewPwd"
            hidden
          /> */}

          <div className="form-area-edit" style={formFogetPwd}>
            <div className="form-body">
              <p style={forgetpwdTitle}>設定新密碼</p>
              <div>
                <div className="group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="請輸入email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-submit-area">
              <button type="submit" className="join-btn member-button">
                送出
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ForgetPwd
