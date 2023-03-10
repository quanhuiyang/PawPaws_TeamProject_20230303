import React from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import '../styles/acard.css'
import Heartbtn from './Heartbtn'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Acard(props) {
  //進行解構
  const { activity } = props
  //照片導向詳細頁
  const navigate = useNavigate()
  const handleClick = (aid) => {
    navigate(`/activity/detail/${aid}`)
  }
  //收藏

  return (
    <div>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2rem',
        }}
      >
        {activity &&
          activity.length > 0 &&
          activity.map((item) => (
            <SplideSlide key={item.activity_id}>
              <div className="card">
                <div className="heart">
                  <Heartbtn />
                </div>
                <img
                  src={
                    'http://localhost:3001/images/Natalie_img/' + item.picture
                  }
                  onClick={() => handleClick(item.activity_id)}
                  alt={item.picture}
                />
                <div className="location">
                  <div className="city">
                    <LocationOnRoundedIcon />
                    <p>{item.location}</p>
                  </div>
                  <Link to={`/activity/detail/${item.activity_id}`}>
                    <button className="btn">我要報名</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  )
}

export default Acard
