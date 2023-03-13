import React from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import '../styles/acard.css'
import Heartbtn from './Heartbtn'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

//進行解構
function AcardFilter(props) {
  const { activities } = props
  const keywordArray = [...activities]
  //照片導向詳細頁
  const navigate = useNavigate()
  const handleClick = (aid) => {
    navigate(`/activity/detail/${aid}`)
  }

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
        {keywordArray &&
          keywordArray.length > 0 &&
          keywordArray.map((item) => (
            <SplideSlide key={item.activity_id}>
              <div className="acard">
                <div className="heart">
                  <Heartbtn activity={activities.activity_id} />
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
                    <button className="abtn">我要報名</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  )
}

export default AcardFilter
