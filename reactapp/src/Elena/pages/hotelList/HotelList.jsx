import './hotelList.css'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'

const HotelList = () => {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log('searchParams', searchParams)
  const city = searchParams.get('city')
  console.log('url searchParams', city)
  // const [city] = useParams()
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
  const [hotels, setHotel] = useState([])
  //不要讓getHotel()被重複渲染
  useEffect(() => {
    getHotel()
  }, [])
  const getHotel = () => {
    const url = `http://localhost:3000/hotel/${city}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        // console.log(rData)
        setHotel(rData)
      })
  }
  const citySearch = () => {
    setSearchParams({ city: destination }, { replace: true })
    const url = `http://localhost:3000/hotel/${destination}`
    fetch(url, {
      method: 'get',
    })
      .then((r) => r.json())
      .then((rData) => {
        // console.log(rData)
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
              <input
                list="areaList"
                type="text"
                placeholder={destination}
                name="area"
                id="area"
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
              <datalist id="areaList">
                <option value="台北市">台北市</option>
                <option value="基隆市">基隆市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
                <option value="新竹市">新竹市</option>
                <option value="新竹縣">新竹縣</option>
                <option value="苗栗縣">苗栗縣</option>
                <option value="台中市">台中市</option>
                <option value="彰化縣">彰化縣</option>
                <option value="南投縣">南投縣</option>
                <option value="雲林縣">雲林縣</option>
                <option value="嘉義市">嘉義市</option>
                <option value="嘉義縣">嘉義縣</option>
                <option value="台南市">台南市</option>
                <option value="高雄市">高雄市</option>
                <option value="屏東縣">屏東縣</option>
                <option value="宜蘭縣">宜蘭縣</option>
                <option value="花蓮縣">花蓮縣</option>
                <option value="台東縣">台東縣</option>
                <option value="澎湖縣">澎湖縣</option>
                <option value="金門縣">金門縣</option>
                <option value="連江縣">連江縣</option>
              </datalist>
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
            <button onClick={citySearch}>搜尋</button>
          </div>
          <div className="listResult">
            {hotels.map((hotel) => (
              <SearchItem hotel={hotel} key={hotel.h_id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelList
