import React, { useState } from 'react'
import styled from 'styled-components'

function Collectbtn() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = async () => {
    setIsClicked(!isClicked)
  }
  return (
    <Btn>
      <button
        onClick={handleClick}
        style={{ backgroundColor: isClicked ? '#b5b5b5' : '#8dd9ce' }}
      >
        {isClicked ? '已收藏' : '我要收藏'}
      </button>
    </Btn>
  )
}

const Btn = styled.div`
  button {
    padding: 1rem;
    margin: 1rem;
    border: 5px #8dd9ce;
    border-radius: 15px;
    background-color: #8dd9ce;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
`

export default Collectbtn
