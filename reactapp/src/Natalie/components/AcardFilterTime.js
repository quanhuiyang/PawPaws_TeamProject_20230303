import React, { useState, useEffect } from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import '../styles/acard.css'
import Heartbtn from './Heartbtn'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function AcardFilterTime(props) {
  const { activity } = props
  const navigate = useNavigate()
  const [filteredActivity, setFilteredActivity] = useState([])

  // 在 useEffect 中將符合條件的活動篩選出來
  //篩選一週內的活動
  useEffect(() => {
    const filtered = activity.filter((item) => {
      const startDate = new Date(item.begindate)
      const now = new Date()
      const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7))
      return startDate > sevenDaysAgo
    })
    setFilteredActivity(filtered)
  }, [activity])

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
        {filteredActivity.map((item) => (
          <SplideSlide key={item.activity_id}>
            <div className="acard">
              <div className="heart">
                <Heartbtn activity={item.activity_id} />
              </div>
              <img
                src={'http://localhost:3001/images/Natalie_img/' + item.picture}
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

export default AcardFilterTime
