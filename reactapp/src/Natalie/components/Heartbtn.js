import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Heartbtn(props) {
  const [favorite, setFavorite] = useState(
    localStorage.getItem('itemId') === 'true'
  )
  const itemId = props
  const sid = JSON.parse(localStorage.getItem('user')).sid

  const handleClick = async () => {
    console.log(itemId.activity)
    try {
      // 發送 POST 或 DELETE 請求到服務器
      const res = await fetch(
        `http://localhost:3000/activity/collection/${itemId.activity}/${sid}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (res.ok) {
        // 更新收藏狀態
        setFavorite(!favorite)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
    </div>
  )
}

export default Heartbtn
