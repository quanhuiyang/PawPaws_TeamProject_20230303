import React, { useState } from 'react'
import styled from 'styled-components'
import ActivityCollectPage from '../../Natalie/pages/ActivityCollectPage'
import TestPage from '../../Natalie/pages/TestPage'
import TestPage2 from '../../Natalie/pages/TestPage2'
import MemberInfo from '../pages/MemberInfo'

function Collection() {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <div>
      <CollectTitle>
        <h4>收藏清單</h4>
        {/* 切換分頁按鈕 */}
        <button onClick={() => setCurrentPage(0)}>活動收藏</button>
        <button onClick={() => setCurrentPage(1)}>商品收藏</button>
        <button onClick={() => setCurrentPage(2)}>飯店收藏</button>
        <hr />
        {/* 顯示當前分頁 */}
        {currentPage === 0 && <ActivityCollectPage />}
        {currentPage === 1 && <TestPage />}
        {currentPage === 2 && <TestPage2 />}
      </CollectTitle>
    </div>
  )
}

const CollectTitle = styled.div`
  margin: 1rem auto;
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
