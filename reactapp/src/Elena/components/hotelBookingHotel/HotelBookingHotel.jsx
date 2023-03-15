import React from 'react'
import './hotelBookingHotel.css'

function HotelBookingHotel() {
  return (
    <>
      <div className="hotelBookingHotel">
        <hotelForm>
          <div className="hotelFormContainer">
            <div className="hotelFormImg">
              <img
                src="http://localhost:3000/images/Elena_img/hotel1.jpg"
                alt=""
                className="hbiImg"
              />
            </div>
            <div className="hotelFormDetail">
              <div>您的入住資訊</div>
              <div>入住時間:2023年3月22日(三)</div>
              <div>退房時間:2023年3月23日(四)</div>
              <div>飯店名稱：台北君悅酒店</div>
              <div>飯店地址:110台北市信義區松壽路2號</div>
              <div>房型：雙人房（一大床）一間</div>
              <div>
                入住人數
                <div>成人:2人</div>
                <div>兒童:2人</div>
                <div>寵物:1位</div>
              </div>
              <div>價格: NT$ 9900元 (含稅價)</div>
            </div>
          </div>
          {/* <button
            className="hotelBookingInfoBtn"
            onClick={() => {
              navigate(`/hotel/hotelpayment`)
            }}
          >
            確認預訂
          </button> */}
        </hotelForm>
      </div>
    </>
  )
}

export default HotelBookingHotel
