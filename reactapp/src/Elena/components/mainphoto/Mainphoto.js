import './mainphoto.scss'
import React, { useState } from 'react'
import useInterval from 'use-interval'

const Mainphoto = () => {
  const [img, setImg] = useState()
  const [count, setCount] = useState(0)

  useInterval(() => {
    const topBackground = document.querySelector('section.background-img')
    // console.log(topBackground.style.backgroundImage)

    const imgs = ['dog1.jpg', 'dog2.jpg', 'cat1.jpg']

    topBackground.style.backgroundImage = `url("http://localhost:3001/images/Elena_img/mainphoto/${imgs[count]}")`

    const max = imgs.length - 1
    const newCount = count + 1 > max ? count - max : count + 1
    console.log(newCount)

    setCount(newCount)
  }, 3000)

  return (
    <>
      <section className="background-img">
        <div className="filter"></div>
        <h3>
          寵物生活平台。
          <br />
          與寵物一起生活～
        </h3>
      </section>
    </>
  )
}

export default Mainphoto
