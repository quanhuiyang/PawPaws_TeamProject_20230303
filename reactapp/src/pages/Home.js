import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Mainphoto from '../Elena/components/mainphoto/Mainphoto'
import Slide from '../Natalie/components/Slide'

function Home() {
  return (
    <>
      <Mainphoto />
      {/* 商城 */}
      <Htitle>
        <h5>Pets Shop</h5>
        <p>寵物商城</p>
      </Htitle>
      <Line>
        <hr />
      </Line>

      <Picture>
        <img src="../images/Natalie_img/hp01.jpg" alt="AC06" />
      </Picture>

      <Btn>
        <Link to={`/shop`}></Link>
        <button>看更多>></button>
      </Btn>

      {/* 旅館 */}
      <Htitle>
        <h5>Pets Hotels</h5>
        <p>寵物住宿</p>
      </Htitle>
      <Line>
        <hr />
      </Line>

      <Picture>
        <img src="../images/Natalie_img/hp01.jpg" alt="AC06" />
      </Picture>

      <Btn>
        <Link to={`/hotel`}></Link>
        <button>看更多>></button>
      </Btn>

      {/* 寵物活動 */}
      <Htitle>
        <h5>Pets Activity</h5>
        <p>寵物活動</p>
      </Htitle>
      <Line>
        <hr />
      </Line>

      <Slide />
      <Btn>
        <Link to={`/activity`}>
          <button>看更多>></button>
        </Link>
      </Btn>
    </>
  )
}

const Htitle = styled.div`
  margin: 50px auto;
  text-align: center;
  background: #fff5ea;
  width: 10%;
  min-width: 100px;
`
const Line = styled.div`
  hr {
    color: #ffb544;
  }
`
const Picture = styled.div`
  width: 100%;
  height: 100%;
  img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    max-height: 300px;
    overflow: hidden;
  }
`

const Btn = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  button {
    color: #ffb544;
    background: none;
    padding: 10px;
    border: 2px solid #ffb544;
    border-radius: 15px;
  }
`
export default Home
