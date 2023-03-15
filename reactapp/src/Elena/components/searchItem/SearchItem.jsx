import './searchItem.css'
import { Link, useNavigate } from 'react-router-dom'

function SearchItem(props) {
  const navigate = useNavigate()
  //進行解構
  const { hotel } = props
  // console.log(props) //{hotel:{h_id,h_....}}
  // console.log(hotel) //{"h_id":1,"h_name":"台北君悅酒店","h_tel":"227201234","h_zipcode":110,"h_city":"台北市","h_dist":"信義區","h_address":"松壽路2號","h_url":"https://www.hyatt.com/zh-HK/hotel/taiwan/grand-hyatt-taipei/taigh","h_info":"帶著愛犬一起去旅遊，享受國際五星級酒店住宿體驗，特別提供多樣狗狗專屬服務，包含專用飲水及餐碗、專屬睡墊等貼心用品、豐富早餐、及Cheers戶外空間享用免費飲料等多項優惠。","h_distance":"100","h_photos":null,"h_rating":9.8,"h_cheapestPrice":9800}
  return (
    <div className="searchItem">
      <img
        src={'http://localhost:3000/images/Elena_img/' + hotel.h_photos}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{hotel.h_name}</h1>
        <span className="siCity">{hotel.h_city}</span>
        <span className="siDistance">離市中心{hotel.h_distance}m</span>
        <span className="siTaxi0p">免費機場接駁</span>
        <span className="siSubtitle">冷氣套房</span>
        <span className="siFeatures">一大床 • 獨立衛浴 • minibar</span>
        <span className="siCancelOp">免費取消</span>
        <span className="siCance10pSubtitle">您可以稍後取消,請放心預訂！</span>
      </div>
      <div className="siDetails">
        {hotel.h_rating && (
          <div className="siRating">
            <span>超讚</span>
            <button>{hotel.h_rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">NTD${hotel.h_cheapestPrice}</span>
          <span className="siTaxOp">含稅價</span>
          <button
            className="siCheckButton"
            onClick={() => {
              navigate(`/hotel/hoteldetail/${hotel.h_id}`)
            }}
          >
            預訂
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
