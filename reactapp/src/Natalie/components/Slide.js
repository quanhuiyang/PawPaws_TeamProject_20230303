import React, { useEffect, useRef } from 'react'
import '../styles/slide.css'

function Slide() {
  const listRef = useRef(null)
  const boxRef = useRef(null)
  let left = 0

  useEffect(() => {
    const list = listRef.current
    const box = boxRef.current
    list.innerHTML += list.innerHTML
    //500為每張照片的長，10為margin-right
    const intervalId = setInterval(() => {
      left -= 2
      if (left === -(6 * 500 + 6 * 10)) {
        left = 0
      }
      list.style.left = left + 'px'
    }, 15)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <div className="box" ref={boxRef}>
        <div className="list" ref={listRef}>
          <div>
            <img src="../images/Natalie_img/AC01.jpg" alt="AC01" />
          </div>
          <div>
            <img src="../images/Natalie_img/AC02.jpg" alt="AC02" />
          </div>
          <div>
            <img src="../images/Natalie_img/AC03.jpg" alt="AC03" />
          </div>
          <div>
            <img src="../images/Natalie_img/AC04.jpg" alt="AC04" />
          </div>
          <div>
            <img src="../images/Natalie_img/AC05.jpg" alt="AC05" />
          </div>
          <div>
            <img src="../images/Natalie_img/AC06.jpg" alt="AC06" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
