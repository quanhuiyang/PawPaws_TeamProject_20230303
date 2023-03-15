import React, { useState, useEffect } from 'react'
import Table from '../Table'

function ActivityOrder({ sid }) {
  const [orderList, setOrderList] = useState([])

  const getActivityData = () => {
    const url = `http://localhost:3000/members/getActivityData/${sid}` //
    fetch(url)
      .then((res) => res.json())
      .then((rData) => {
        console.log(url, rData)
        setOrderList(rData)
      })
  }

  useEffect(() => {
    getActivityData()
  }, [])

  return (
    <>
      <Table
        orderList={orderList}
        header={['a_pid', 'a_email', 'a_address', 'a_phone', 'a_name']} //
        sid={sid}
      ></Table>
    </>
  )
}

export default ActivityOrder
