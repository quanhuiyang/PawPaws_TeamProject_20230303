import React from 'react'
import './hotelBookingSuccess.css'
import StateBar from '../../../Elena/components/stateBar/StateBar'
import HotelBookingHotel from '../../components/hotelBookingHotel/HotelBookingHotel'
import { Link, useNavigate } from 'react-router-dom'

function HotelBookingSuccess() {
  const navigate = useNavigate()

  return (
    <>
      <StateBar />
      <div className="bookingSuccessContainer">
        <h2>恭喜你完成預訂</h2>
        <h1>訂單代號:HGHT2023032200001</h1>
        <HotelBookingHotel />
        <button
          className="hotelSuccessBtn"
          onClick={() => navigate(`/hotel//Memberinfo`)}
        >
          查詢訂單
        </button>
        <button className="hotelSuccessBtn" onClick={() => navigate(`/hotel/`)}>
          回飯店首頁
        </button>
      </div>
    </>
  )
}

export default HotelBookingSuccess
