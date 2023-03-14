import React, { useState, useEffect } from 'react'
import ActivityOrder from './ActivityOrder'
import HotelOrder from './HotelOrder'
import ShopOrder from './ShopOrder'
import styled from 'styled-components'

const orderListArea = {
  margin: 'auto',
  border: '1px solid #8DD9CE',
  borderRadius: '0px 10px 10px 10px',
  overflow: 'hidden',
  background: '#fff',
  paddingBottom: '30px',
  width: '1200px',
}

const formBody = {
  padding: '30px 80px 15px 80px',
}

const CollectTitle = styled.div`
  /* background: #fff; */
  width: 100%;
  h4 {
    font-weight: 600;
  }
  button {
    background: #8dd9ce;
    margin-right: 1rem;
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: 10px;
    color: #fff;
  }
  button.active {
    ${'' /* background: #6dccce; */}
    border: 2px solid #8dd9ce;
    color: #333;
  }
`

function Order() {
  const [orders, setOrders] = useState([])
  const [currentTab, setCurrentTab] = useState(0)

  const sid =
    localStorage.getItem('user') === null
      ? 0
      : JSON.parse(localStorage.getItem('user')).sid

  return (
    <>
      {/* <form style={orderForm}> */}
      {/* <div style={orderListArea}>
        <div className="form-body">
          <TestCollection />
        </div>
      </div> */}
      {/* </form> */}
      <div style={orderListArea}>
        <div style={formBody}>
          <CollectTitle>
            {/* 切換分頁按鈕 */}
            <button
              className={currentTab === 0 ? 'active' : ''}
              onClick={() => setCurrentTab(0)}
            >
              商品訂單
            </button>
            <button
              className={currentTab === 1 ? 'active' : ''}
              onClick={() => setCurrentTab(1)}
            >
              飯店訂單
            </button>
            <button
              className={currentTab === 2 ? 'active' : ''}
              onClick={() => setCurrentTab(2)}
            >
              活動訂單
            </button>
            <hr />
            {/* 顯示當前分頁 */}
            {currentTab === 0 && <ShopOrder sid={sid} />}
            {currentTab === 1 && <HotelOrder sid={sid} />}
            {currentTab === 2 && <ActivityOrder sid={sid} />}
          </CollectTitle>
        </div>
      </div>
    </>
  )
}

export default Order
