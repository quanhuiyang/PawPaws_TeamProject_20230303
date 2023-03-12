import React from 'react'
import Cards from 'react-credit-cards'
import './paymentForm.scss'
import './paymentForm.css'
// import { Link, useNavigate } from 'react-router-dom'

export default class PaymentForm extends React.Component {
  // navigate = useNavigate()

  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="PaymentForm">
        <Cards
          number={this.state.number}
          name={this.state.name}
          expiry={this.state.expiry}
          cvc={this.state.cvc}
          // focused={this.state.focus}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            maxLength={16}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="text"
            name="name"
            placeholder="Card Hodlder's Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="expiry"
            placeholder=" MM / YY"
            maxLength={4}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="ex:345"
            maxLength={3}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
        {/* <button
          className="hotelPaymentBtn"
          onClick={() => {
            navigate(`/hotel/hotelpaymentsuccess`)
          }}
        >
          確認付款
        </button> */}
      </div>
    )
  }
}
