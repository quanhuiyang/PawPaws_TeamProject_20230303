import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Info from '../components/Info'
import Infocontain from '../components/Infocontain'
import { useParams } from 'react-router-dom'

function ActivityDetail(props) {
  const [activityDetail, setActivityDetail] = useState([])
  //const { activity_id } = props
  const { activity_id } = useParams()
  useEffect(() => {
    getActivityDetail()
  }, [])
  const getActivityDetail = () => {
    const url = `http://localhost:3000/activity/detail/${activity_id}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log(rData)
        setActivityDetail(rData)
      })
  }

  return (
    <div>
      {activityDetail &&
        activityDetail.length > 0 &&
        activityDetail.map((item) => (
          <div className="wrap" key={item.activity_id}>
            <Picture activityDetail={activityDetail}>
              <img
                src={'http://localhost:3001/images/Natalie_img/' + item.picture}
                alt={item.picture}
              />
            </Picture>
            <Card>
              <Infocontain activityDetail={activityDetail} />
              <Info activityDetail={activityDetail} />
            </Card>
          </div>
        ))}
    </div>
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
