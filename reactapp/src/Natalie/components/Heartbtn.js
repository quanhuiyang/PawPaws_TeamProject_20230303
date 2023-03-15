import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useNavigate } from 'react-router-dom'

function Heartbtn(props) {
  const navigate = useNavigate()

  const [favorite, setFavorite] = useState(
    localStorage.getItem('itemId') === 'true'
  )
  const itemId = props
  const sid = JSON.parse(localStorage.getItem('user'))?.sid
  const handleClick = async () => {
    if (!sid) {
      alert('請先登入')
      navigate('/members')
      return
    }
    console.log(itemId.activity)
    try {
      // 發送POST請求到服務器
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
      {sid ? ( // 如果 sid 存在就顯示按鈕，否則不顯示
        <button onClick={handleClick}>
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </button>
      ) : (
        <button onClick={handleClick}>
          <FavoriteBorderIcon />
        </button>
      )}
    </div>
  )
}

export default Heartbtn
