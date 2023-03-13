import React from 'react'
import './hotelBookingSuccess.css'
import StateBar from '../../../Elena/components/stateBar/StateBar'
import HotelBookingHotel from '../../components/hotelBookingHotel/HotelBookingHotel'

function HotelBookingSuccess() {
  return (
    <>
      <StateBar />
      <div className="bookingSuccessContainer">
        <h2>恭喜你完成預訂</h2>
        <h1>訂單代號:HGHT2023032200001</h1>
        <HotelBookingHotel />
        <button>查詢訂單</button>
        <button>回飯店首頁</button>
      </div>
    </>
  )
}

export default HotelBookingSuccess
