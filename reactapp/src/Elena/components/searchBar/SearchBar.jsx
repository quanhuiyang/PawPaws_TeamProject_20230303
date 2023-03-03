import {
  faBed,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './searchBar.css'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ type }) => {
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

  const handleSearch = () => {
    navigate('/hotel/hotellist', { state: { destination, date, options } })
  }

  return (
    <div className="headerSearchContainer">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            type="text"
            placeholder="您想去哪裡玩呢?"
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
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="headerSearchText"
          >{`${options.adult} 成人 · ${options.children} 兒童 · ${options.pet} 寵物 · ${options.room} 房間`}</span>
          {openOptions && (
            <div className="options">
              <div className="optionItem">
                <span className="optionText">成人</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption('adult', 'd')}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption('adult', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">兒童</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption('children', 'd')}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption('children', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">寵物</span>
                <div className="optionCounter">
                  <button
                    disabled={options.pet <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption('pet', 'd')}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.pet}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption('pet', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">房間</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption('room', 'd')}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption('room', 'i')}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn" onClick={handleSearch}>
            搜尋
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
