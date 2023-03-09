// import './hotelDetail.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
//   faCircleXmark,
//   faLocationDot,
// } from '@fortawesome/free-solid-svg-icons'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const HotelDetail = () => {
//   const [slideNumber, setSlideNumber] = useState(0)
//   const [open, setOpen] = useState(false)

//   const [title, setTitle] = useState('')
//   const [images, setImages] = useState([])

//   // id is string
//   const { id } = useParams()

//   console.log(id)

//   const data = [
//     {
//       id: 1,
//       name: 't1111',
//       photos: [
//         {
//           src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
//         },
//         {
//           src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: 't2222',
//       photos: [
//         {
//           src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
//         },
//         {
//           src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
//         },
//         {
//           src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
//         },
//       ],
//     },
//   ]

//   // didMount
//   useEffect(() => {
//     const item = data.find((v, i) => Number(id) === v.id)

//     if (item) {
//       setTitle(item.name)
//       setImages(item.photos)
//     }
//   }, [])

//   const photos = [
//     {
//       src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
//     },
//     {
//       src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
//     },
//     {
//       src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
//     },
//     {
//       src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
//     },
//     {
//       src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
//     },
//     {
//       src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
//     },
//   ]

//   const handleOpen = (i) => {
//     setSlideNumber(i)
//     setOpen(true)
//   }

//   const handleMove = (direction) => {
//     let newSlideNumber

//     if (direction === 'l') {
//       newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
//     } else {
//       newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
//     }

//     setSlideNumber(newSlideNumber)
//   }

//   return (
//     <div>
//       <div className="hotelContainer">
//         {open && (
//           <div className="slider">
//             <FontAwesomeIcon
//               icon={faCircleXmark}
//               className="close"
//               onClick={() => setOpen(false)}
//             />
//             <FontAwesomeIcon
//               icon={faCircleArrowLeft}
//               className="arrow"
//               onClick={() => handleMove('l')}
//             />
//             <div className="sliderWrapper">
//               <img src={photos[slideNumber].src} alt="" className="sliderImg" />
//             </div>
//             <FontAwesomeIcon
//               icon={faCircleArrowRight}
//               className="arrow"
//               onClick={() => handleMove('r')}
//             />
//           </div>
//         )}
//         <div className="hotelWrapper">
//           <button className="bookNow">預訂</button>
//           <h1 className="hotelTitle">{title}</h1>
//           <div className="hotelAddress">
//             <FontAwesomeIcon icon={faLocationDot} />
//             <span>台北市信義區</span>
//           </div>
//           <span className="hotelDistance">地點極佳 – 距離市中心500m</span>
//           <span className="hotelPriceHighlight">
//             預訂此飯店 NTD$9900 起 將獲得機場接送服務
//           </span>
//           <div className="hotelImages">
//             {photos.map((photo, i) => (
//               <div className="hotelImgWrapper" key={i}>
//                 <img
//                   onClick={() => handleOpen(i)}
//                   src={photo.src}
//                   alt=""
//                   className="hotelImg"
//                 />
//               </div>
//             ))}
//           </div>
//           <div className="hotelDetails">
//             <div className="hotelDetailsTexts">
//               <h1 className="hotelTitle">住宿在市中心</h1>
//               <p className="hotelDesc">
//                 帶著愛犬一起去旅遊，享受國際五星級酒店住宿體驗，特別提供多樣狗狗專屬服務，包含專用飲水及餐碗、專屬睡墊等貼心用品、豐富早餐、及Cheers戶外空間享用免費飲料等多項優惠。
//               </p>
//             </div>
//             <div className="hotelDetailsPrice">
//               <h1>美好的9晚住宿</h1>
//               <span>位在台北市中心, 此飯店地理位置評分為9.8顆星！</span>
//               <h2>
//                 <b>NTD$9800</b> (9 晚)
//               </h2>
//               <button>預訂!</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HotelDetail

import './hotelDetail.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'
import Reserve from '../../components/reserve/Reserve'

const Hotel = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const { dates, options } = useContext(SearchContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    return diffDays
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  const handleClick = () => {
    if (user) {
      setOpenModal(true)
    } else {
      navigate('/login')
    }
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        'loading'
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove('l')}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove('r')}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  )
}

export default Hotel
