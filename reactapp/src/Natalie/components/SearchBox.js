import React from 'react'
import styled from 'styled-components'

function SearchBox() {
  return (
    <SearchBtn>
      <input type="text" placeholder="位置" />
      <input type="text" placeholder="時間" />
      <input type="text" placeholder="搜尋活動" />
    </SearchBtn>
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
