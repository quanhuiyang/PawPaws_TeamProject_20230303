import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Arrowbtn from '../Natalie/components/Arrowbtn'
import ImageSlider from '../Natalie/components/ImageSlider'
import Acard from '../Natalie/components/Acard'
import SearchBox from '../Natalie/components/SearchBox'

function Activity() {
  const [activity, setActivity] = useState([])
  //不要讓getActivity()被重複渲染
  useEffect(() => {
    getActivity()
  }, [])
  const getActivity = () => {
    const url = 'http://localhost:3000/activity'
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log(rData)
        setActivity(rData)
      })
  }

  //輪播牆
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }

  const cardtitle = ['精選活動', '本週新上架', '最多人喜歡']
  const slides = [
    { url: 'http://localhost:3001/images/Natalie_img/AC01.jpg', title: 'ac1' },
    { url: 'http://localhost:3001/images/Natalie_img/AC02.jpg', title: 'ac2' },
    { url: 'http://localhost:3001/images/Natalie_img/AC03.jpg', title: 'ac3' },
    { url: 'http://localhost:3001/images/Natalie_img/AC04.jpg', title: 'ac4' },
    { url: 'http://localhost:3001/images/Natalie_img/AC05.jpg', title: 'ac5' },
    { url: 'http://localhost:3001/images/Natalie_img/AC06.jpg', title: 'ac6' },
  ]

  const containerStyles = {
    width: '100%',
    maxHeight: '70vh',
    aspectRatio: '16/9',
    margin: '0 auto',
  }
  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions)
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])
  return (
    <div className="font">
      <div className="slidebox">
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={windowWidth} />
        </div>
      </div>
      <div className="wrap">
        <SearchBox />
        <Arrowbtn name={cardtitle[0]} />
        <Acard activity={activity} />
        <Arrowbtn name={cardtitle[1]} />
        <Acard activity={activity} />
        {/* <Arrowbtn name={cardtitle[2]} />
        <Acard activity={activity} /> */}
      </div>
    </div>
  )
}

export default Activity
