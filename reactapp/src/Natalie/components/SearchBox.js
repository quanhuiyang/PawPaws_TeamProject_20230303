import React, { useRef, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import AcardFilter from './AcardFilter'

function SearchBox() {
  const [keyword, setKeyword] = useState('')
  const [activities, setActivities] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault()
    const url = `http://localhost:3000/activity/search?q=${keyword}`
    fetch(url)
      .then((r) => r.json())
      .then((rData) => {
        console.log(rData)
        setKeyword(keyword)
        setActivities(rData)
      })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchBtn>
          <input
            type="text"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="輸入城市"
          />
          <button type="submit">搜尋</button>
        </SearchBtn>
      </form>
      <AcardFilter activities={activities} />
    </>
  )
}

const SearchBtn = styled.div`
  border-radius: 10px;
  display: flex;
  background: #ffffff;
  padding: 10px;
  width: 100%;
  height: fit-content;
  justify-content: space-evenly;
  input {
    border: none;
    outline: none;
    margin-right: 1rem;
    /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3) inset; */
    border-radius: 10px;
    padding: 10px;
    background: #fff;
    width: 90%;
    height: fit-content;
  }
  button {
    min-width: 80px;
    background: #8dd9ce;
    padding: 10px;
    border-radius: 10px;
    border: none;
    color: #fff;
  }
`
export default SearchBox
