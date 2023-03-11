import './hotelDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

function HotelDetail() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [hotel, setHotel] = useState([])

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: 'http://localhost:3000/images/Elena_img/hotel_d1.jpg',
    },
    {
      src: 'http://localhost:3000/images/Elena_img/hotel_d2.jpg',
    },
    {
      src: 'http://localhost:3000/images/Elena_img/hotel_d3.jpg',
    },
    {
      src: 'http://localhost:3000/images/Elena_img/hotel_d4.jpg',
    },
    {
      src: 'http://localhost:3000/images/Elena_img/hotel_d5.jpg',
    },
    {
      src: 'http://localhost:3000/images/Elena_img/hotel_d6.jpg',
    },
  ]

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

  useEffect(() => {
    getHotel()
  }, [])
  const getHotel = () => {
    const url = `http://localhost:3000/hotel/${id}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log(rData)
        setHotel(rData)
      })
  }

  return (
    <div>
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
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove('r')}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button
            className="bookNow"
            onClick={() => {
              navigate(`/hotel/hotelbooking/${hotel.h_id}`)
            }}
          >
            預訂
          </button>
          <h1 className="hotelTitle">{hotel.h_name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              {hotel.h_zipcode}
              {hotel.h_city}
              {hotel.h_dist}
              {hotel.h_address}
            </span>
          </div>
          <span className="hotelDistance">
            地點極佳 – 距離市中心{hotel.h_distance}m
          </span>
          <span className="hotelPriceHighlight">
            預訂此飯店 NTD${hotel.h_cheapestPrice} 起 將獲得機場接送服務
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">住宿在市中心</h1>
              <p className="hotelDesc">{hotel.h_info}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>美好的9晚住宿</h1>
              <span>
                位在{hotel.h_city}中心, 此飯店地理位置評分為{hotel.h_rating}
                顆星！
              </span>
              <h2>
                <b>NTD${hotel.h_cheapestPrice}</b> (1 晚)
              </h2>
              <button
                className="bookNow1"
                onClick={() => {
                  navigate(`/hotel/hotelbooking/${hotel.h_id}`)
                }}
              >
                預訂
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDetail
