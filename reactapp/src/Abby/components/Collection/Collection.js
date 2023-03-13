import React, { useState } from 'react'
import styled from 'styled-components'
import ActivityCollection from './ActivityCollection'
import HotelCollection from './HotelCollection'
import ShopCollection from './ShopCollection'

function Collection({}) {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div>
      <CollectTitle>
        {/* 切換分頁按鈕 */}
        <button onClick={() => setCurrentTab(0)}>商品收藏</button>
        <button onClick={() => setCurrentTab(1)}>飯店收藏</button>
        <button onClick={() => setCurrentTab(2)}>活動收藏</button>
        <hr />
        {/* 顯示當前分頁 */}
        {currentTab === 0 && <ShopCollection />}
        {currentTab === 1 && <HotelCollection />}
        {currentTab === 2 && <ActivityCollection />}
      </CollectTitle>
    </div>
  )
}

const CollectTitle = styled.div`
  /* background: #fff; */
  width: 85%;
  h4 {
    font-weight: 600;
  }
  button {
    background: #8dd9ce;
    margin-right: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    color: #fff;
  }
`
export default Collection
