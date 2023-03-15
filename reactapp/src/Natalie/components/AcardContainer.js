import React, { useState } from 'react'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import '../styles/acard.css'
import Heartbtn from './Heartbtn'
import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function AcardContainer() {
  const sid = JSON.parse(localStorage.getItem('user')).sid
  // const sid = localStorage.getItem('user')
  //照片導向詳細頁
  const navigate = useNavigate()
  const handleClick = (aid) => {
    navigate(`/activity/detail/${aid}`)
  }
  const [favorite, setFavorite] = useState([])
  useEffect(() => {
    getFavorite()
  }, [])
  const getFavorite = () => {
    const url = `http://localhost:3000/activity/alikes/${sid}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        setFavorite(rData)
      })
  }
  console.log(favorite)
  console.log(typeof favorite)
  return (
    <div>
      {favorite.map((favorite) => (
        <div className="acard">
          <div className="heart">
            <Heartbtn activity={favorite.activity_id} />
          </div>
          <img
            src={'http://localhost:3001/images/Natalie_img/' + favorite.picture}
            onClick={() => handleClick(favorite.activity_id)}
            alt={favorite.picture}
          />
          <div className="location">
            <div className="city">
              <LocationOnRoundedIcon />
              <p>{favorite.location}</p>
            </div>
            <Link to={`/activity/detail/${favorite.activity_id}`}>
              <button className="abtn">我要報名</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AcardContainer
