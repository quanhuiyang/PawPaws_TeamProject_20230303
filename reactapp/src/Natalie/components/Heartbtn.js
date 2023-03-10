import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

function Heartbtn(props) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
    if (!isClicked) {
      alert('收藏成功')
    } else {
      alert('取消收藏')
    }
  }
  return (
    <div>
      <button onClick={handleClick}>
        {isClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
    </div>
  )
}

export default Heartbtn
