import { useState } from 'react'
import GoogleButton from 'react-google-button'
import './members.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <>
      <div>設定新密碼</div>
      <div className="container">
        <div className="formHeader">
          <button className="top-info-btn member-button">個人資訊</button>
          <button className="top-order-btn member-button">訂單查詢</button>
          <button className="top-likes-btn member-button">我的追蹤</button>
        </div>
        <form>
          <div className="form-area-edit">
            <div className="form-body">
              <div>
                <div className="group">
                  <input
                    type="text"
                    name="email"
                    placeholder="請輸入舊密碼"
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="password"
                    name="password"
                    placeholder="請輸入新密碼"
                    required
                  />
                </div>
                <div className="group">
                  <input
                    type="password"
                    name="dbPassword"
                    placeholder="請再次確認密碼"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-submit-area">
              <button type="reset" className="rewrite-btn member-button">
                重新填寫
              </button>
              <button type="submit" className="join-btn member-button">
                儲存送出
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
