import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import './paymentForm.scss'
import './paymentForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { width } from '@mui/system'

export default function PaymentForm() {
  const navigate = useNavigate()

  const [credit, setCredit] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
    focus: '',
  })

  console.log('credit', credit)
  const handleInputFocus = (e) => {
    setCredit({ ...credit, focus: e.target.name })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setCredit({ ...credit, [name]: value })
  }
  return (
    <div className="PaymentForm">
      <Cards
        number={credit.number}
        name={credit.name}
        expiry={credit.expiry}
        cvc={credit.cvc}
        // focused={credit.focus}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          maxLength={16}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Card Hodlder's Name"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="expiry"
          placeholder=" MM / YY"
          maxLength={4}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="ex:345"
          maxLength={3}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
      >
        <button
          className="hotelPaymentBtn displayRight"
          onClick={() => navigate(`/hotel/hotelbookingsuccess`)}
        >
          確認付款
        </button>
      </div>
    </div>
  )
}
