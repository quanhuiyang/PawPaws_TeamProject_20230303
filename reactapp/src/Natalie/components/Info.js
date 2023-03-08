import React, { navigate } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Collectbtn from './Collectbtn'
import 'datejs'

function Info(props) {
  const { activityDetail } = props
  const item = activityDetail[0]
  return (
    <Infocard>
      <Infoheader>
        <h3>活動資訊</h3>
      </Infoheader>
      <Infomation>
        <h5>{item.title}</h5>
        <p>
          {new Date(item.begindate).toString('yyyy-MM-dd')}~
          {new Date(item.deadline).toString('yyyy-MM-dd')}
        </p>
        <p>{item.place}</p>
        <Btn>
          <Link to="/activity/signup">
            <button>我要報名</button>
          </Link>
          <Collectbtn />
        </Btn>
      </Infomation>
    </Infocard>
  )
}
const Infocard = styled.div`
  min-width: 30%;
  height: fit-content;
  border-radius: 1rem;
  margin-left: 1rem;
  background: #fff;
`
const Infoheader = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  height: 15%;
  width: 100%;
  background: #8dd9ce;
  h3 {
    margin: 0;
    font-weight: 600;
    color: #fff;
    align-items: center;
  }
`
const Infomation = styled.div`
  padding: 1rem;
  text-align: center;
  p {
    margin: 0;
  }
`
const Btn = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
export default Info
