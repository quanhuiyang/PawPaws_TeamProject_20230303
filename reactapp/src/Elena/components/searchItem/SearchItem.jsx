// import './searchItem.css'
// import { Link, useNavigate } from 'react-router-dom'

// function hotel(props) {

//   //進行解構
//   const { hotel } = props

// const SearchItem = ({ id = '999' }) => {
//   const navigate = useNavigate()

//   return (
//     <div className="searchItem">
//       <img src={item.photos[0]} alt="" className="siImg" />
//       <div className="siDesc">
//         <h1 className="siTitle">{item.h_name}</h1>
//         <span className="siDistance">離市中心{item.h_distance}m</span>
//         <span className="siTaxi0p">免費機場接駁</span>
//         <span className="siSubtitle">冷氣套房</span>
//         <span className="siFeatures">一大床 • 獨立衛浴 • minibar</span>
//         <span className="siCancelOp">免費取消</span>
//         <span className="siCance10pSubtitle">您可以稍後取消,請放心預訂！</span>
//       </div>
//       <div className="siDetails">
//         {item.rating && (
//           <div className="siRating">
//             <span>超讚</span>
//             <button>{item.h_rating}</button>
//           </div>
//         )}
//         <div className="siDetailTexts">
//           <span className="siPrice">NTD${item.h_cheapestPrice}</span>
//           <span className="siTaxOp">含稅價</span>
//           <Link to={`/hotels/${item._h_id}`}>
//             <button
//               className="siCheckButton"
//               onClick={() => {
//                 navigate('/hotel/hoteldetail/' + id)
//               }}
//             >
//               預訂
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SearchItem

import './searchItem.css'
import { Link, useNavigate } from 'react-router-dom'

const SearchItem = ({ id = '999' }) => {
  const navigate = useNavigate()

  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">台北君悅飯店</h1>
        <span className="siDistance">離市中心500m</span>
        <span className="siTaxi0p">免費機場接駁</span>
        <span className="siSubtitle">冷氣套房</span>
        <span className="siFeatures">一大床 • 獨立衛浴 • minibar</span>
        <span className="siCancelOp">免費取消</span>
        <span className="siCance10pSubtitle">您可以稍後取消,請放心預訂！</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>超讚</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">NTD$9900</span>
          <span className="siTaxOp">含稅價</span>
          <button
            className="siCheckButton"
            onClick={() => {
              navigate('/hotel/hoteldetail/' + id)
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
