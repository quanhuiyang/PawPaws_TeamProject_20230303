import React from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import '../styles/acard.css'
import Heartbtn from './Heartbtn'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function AcardContainer(props) {
  //進行解構
  const { activity } = props
  //照片導向詳細頁
  const navigate = useNavigate()
  const handleClick = (aid) => {
    navigate(`/activity/detail/${aid}`)
  }
  console.log(activity)
  return (
    <div>
      {activity &&
        activity.length > 0 &&
        activity.map((item) => (
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
        ))}
    </div>
  )
}

export default AcardContainer
