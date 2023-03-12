import React from 'react'
import './hotelPayment.css'
import StateBar from '../../../Elena/components/stateBar/StateBar'
import { Link, useNavigate } from 'react-router-dom'
import PaymentForm from '../../components/paymentForm/PaymentForm'

function HotelPayment() {
  const navigate = useNavigate()

  return (
    <>
      <StateBar />
      <PaymentForm />
      <div className="hotelPaymentContainer">
        {/* <div className="customerInfo">
          <div>飯店名稱: 台北君悅酒店</div>
          <div>訂單編號: HTAIPEIGHT202303220001</div>
          <div>訂單金額: NTD$ 9900</div>
        </div>
        <div className="hotelPayment">
          <p>
            <label>持卡人姓名:</label>
            <input type="text" placeholder="請輸入卡片上的姓名" />
          </p>
          <p>
            <label>信用卡類別:</label>
            <select name="cardtype" id="cardtype">
              <option></option>
              <option value="VISA">VISA</option>
              <option value="Mastercard">Mastercard</option>
              <option value="JCB">JCB</option>
              <option value="American-Express">American-Express</option>
              <option value="Discover">Discover</option>
            </select>
          </p>
          <p>
            <label>信用卡號:</label>
            <input type="text" placeholder="4444-1111-2222-3333" />
          </p>
          <p>
            <label>有效月年:</label>
            <input type="text" placeholder=" MM / YY" />
          </p>
          <p>
            <label>卡片背面末三碼:</label>
            <input type="text" placeholder="222" />
          </p>
        </div> */}
        <button
          className="hotelPaymentBtn"
          onClick={() => {
            navigate(`/hotel/hotelbookingsuccess`)
          }}
        >
          確認付款
        </button>
      </div>
    </>
  )
}

export default HotelPayment
