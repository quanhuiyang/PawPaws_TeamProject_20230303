import './mainphoto.scss'
import React, { useState } from 'react'
import useInterval from 'use-interval'

const Mainphoto = () => {
  const [imgSrc, setImgSrc] = useState('dog1.jpg')
  const [count, setCount] = useState(0)

  useInterval(() => {
    // const topBackground = document.querySelector('section.background-img')
    // console.log(topBackground.style.backgroundImage)

    const imgs = ['dog1.jpg', 'dog2.jpg', 'cat1.jpg']

    // topBackground.style.backgroundImage = `url("http://localhost:3001/images/Elena_img/mainphoto/${imgs[count]}")`

    const max = imgs.length - 1
    const newCount = count + 1 > max ? count - max : count + 1
    console.log(newCount)
    setImgSrc(imgs[newCount])
    setCount(newCount)
  }, 3000)

  return (
    <>
      <section className="background-img">
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
          }}
          src={`http://localhost:3001/images/Elena_img/mainphoto/${imgSrc}`}
          alt=""
        />
        <div
          className="filter"
          style={{ postion: 'absolute', zIndex: 1 }}
        ></div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>
            寵物生活平台。
            <br />
            與寵物一起生活～
          </h3>
        </div>
      </section>
    </>
  )
}

export default Mainphoto
