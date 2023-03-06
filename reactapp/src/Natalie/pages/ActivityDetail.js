import React from 'react'
import styled from 'styled-components'
import Info from '../components/Info'
import Infocontain from '../components/Infocontain'

function ActivityDetail() {
  return (
    <>
      <div className="wrap">
        <Picture>
          <img src="../images/Natalie_img/AC06.jpg" alt="AC06" />
        </Picture>
        <Card>
          <Infocontain />
          <Info />
        </Card>
      </div>
    </>
  )
}

const Picture = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  padding: 0;
  overflow: hidden;
  margin-bottom: 2rem;
  img {
    border-radius: 20px;
    width: 100%;
  }
`
const Card = styled.div`
  display: flex;
  justify-content: space-around;
`

export default ActivityDetail
