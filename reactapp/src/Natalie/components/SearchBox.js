import {
  faBed,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/searchBar.css'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SearchBox = ({ type }) => {
  const [destination, setDestination] = useState('')
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    pet: 1,
    room: 1,
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div className="headerSearchContainer">
      <HeaderSearch>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            type="text"
            placeholder="輸入縣市"
            className="headerSearchInput"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="headerSearchText"
          >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
            date[0].endDate,
            'MM/dd/yyyy'
          )}`}</span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />
          )}
        </div>
        <SearchName>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="搜尋活動"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <HeaderBtn>搜尋</HeaderBtn>
          </div>
        </SearchName>
      </HeaderSearch>
    </div>
  )
}

const HeaderSearch = styled.div`
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3) inset;
  height: fit-content;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  width: 100%;
  margin: auto;
  font-size: 16px;
`

const OptionCounterNumber = styled.div`
  min-width: 12px;
  display: flex;
  justify-content: flex-end;
`

const HeaderBtn = styled.div`
  margin: 0.5rem;
  padding: 1rem 2rem;
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
`

const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`
const SearchName = styled.div`
  display: flex;
`
export default SearchBox
