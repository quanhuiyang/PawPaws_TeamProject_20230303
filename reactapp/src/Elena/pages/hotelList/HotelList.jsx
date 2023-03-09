import './hotelList.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const HotelList = () => {
  const location = useLocation()
  const d = location.state != null ? location.state.destination : ''
  const d1 = location.state != null ? location.state.date : {}
  const d2 =
    location.state != null
      ? location.state.options
      : { adult: 1, children: 0, pet: 1, room: 1 }

  const [destination, setDestination] = useState(d)
  const [date, setDate] = useState(d1)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(d2)

  const [hotel, setHotel] = useState([])
  //不要讓getHotel()被重複渲染
  useEffect(() => {
    getHotel()
  }, [])
  const getHotel = () => {
    const url = 'http://localhost:3000/hotel/'
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        console.log(rData)
        setHotel(rData)
      })
  }

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">搜尋您的住宿條件</h1>
            <div className="lsItem">
              <label>地點</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>入住日期</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>選項</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">每夜最低價格</span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">每夜最高價格</span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">成人</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">孩童</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">寵物</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.pet}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">房間</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>搜尋</button>
          </div>
          <div className="listResult">
            <SearchItem hotel={hotel} id="1" />
            <SearchItem hotel={hotel} id="2" />
            <SearchItem hotel={hotel} />
            <SearchItem hotel={hotel} />
            <SearchItem hotel={hotel} />
            <SearchItem hotel={hotel} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList
