import React from 'react'
import './stateBar.css'
import {
  faUser,
  faCreditCard,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function StateBar() {
  return (
    <>
      <div className="stateContainer">
        <div className="stateItem">
          <FontAwesomeIcon icon={faUser} className="stateIcon" />
          <div>顧客資料</div>
        </div>
        <div className="stateItem">
          <FontAwesomeIcon icon={faCreditCard} className="stateIcon" />
          {/* <FontAwesomeIcon icon={faBed} className="stateIcon" /> */}
          <div>付款詳情</div>
        </div>
        <div className="stateItem">
          <FontAwesomeIcon icon={faCircleCheck} className="stateIcon" />
          <div>完成預訂</div>
        </div>
      </div>
    </>
  )
}

export default StateBar
