import React, { useState } from 'react'
import styled from 'styled-components'
import ActivityCollectPage from '../Natalie/pages/ActivityCollectPage'
import TestPage from '../Natalie/pages/TestPage'
import TestPage2 from '../Natalie/pages/TestPage2'

function Collection() {
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <div>
      <CollectTitle>
        {/* 切換分頁按鈕 */}
        <button onClick={() => setCurrentPage(0)}>活動收藏</button>
        <button onClick={() => setCurrentPage(1)}>商品收藏</button>
        {/* 顯示當前分頁 */}

        {currentPage === 0 && <ActivityCollectPage />}
        {currentPage === 1 && <TestPage />}
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
    background: none;
    border: none;
    border-bottom: 3px solid #8dd9ce;
    margin-right: 1rem;
    padding: 1rem;
  }
`
export default Collection
