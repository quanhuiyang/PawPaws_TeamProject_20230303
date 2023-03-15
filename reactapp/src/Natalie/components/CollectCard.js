import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import React from 'react'
import styled from 'styled-components'
import Heartbtn from './Heartbtn'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CollectCard() {
  const sid = JSON.parse(localStorage.getItem('user'))?.sid // 使用三元運算子判斷是否有找到sid
  // const sid = JSON.parse(localStorage.getItem('user')).sid
  //照片導向詳細頁
  const navigate = useNavigate()
  const handleClick = (aid) => {
    navigate(`/activity/detail/${aid}`)
  }
  const [favorite, setFavorite] = useState([])
  useEffect(() => {
    if (sid) {
      // 如果有找到sid再執行getFavorite()
      getFavorite()
    }
  }, [sid])
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
  return (
    <>
      <CardWrap>
        {favorite.map((favorite) => (
          <Ccard>
            <img
              src={
                'http://localhost:3001/images/Natalie_img/' + favorite.picture
              }
              alt="AC01"
              onClick={() => handleClick(favorite.activity_id)}
            />
            <Ccontainer>
              <Information>
                <p>{favorite.title}</p>
                <Location>
                  <LocationOnRoundedIcon />
                  <p>{favorite.location}</p>
                </Location>
              </Information>
              <Link to={`/activity/detail/${favorite.activity_id}`}>
                <button>活動詳情>></button>
              </Link>
            </Ccontainer>
          </Ccard>
        ))}
      </CardWrap>
    </>
  )
}

const CardWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
const Ccard = styled.div`
  width: calc(33.33% - 20px);
  margin: 1rem 1rem 1rem 0;
  background: #ffffff;
  min-width: 250px;
  height: fit-content;
  border-radius: 20px;
  overflow: hidden;
  img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: auto;
  }
`
const Ccontainer = styled.div`
  margin: 0.5rem;
  button {
    min-width: fit-content;
    color: black;
    background: none;
    float: right;
  }
`

const Information = styled.div`
  margin: 5px;
  p {
    font-weight: 600;
  }
`

const Location = styled.div`
  display: flex;
`

export default CollectCard
