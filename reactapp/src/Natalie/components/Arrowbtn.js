import React from 'react'
import '../styles/arrowbtn.css'
import '../styles/acard.css'
import PetsIcon from '@mui/icons-material/Pets'

function Arrowbtn(props) {
  return (
    <div>
      <div className="title">
        <span className="stitle">
          <PetsIcon />
          <h2>{props.name}</h2>
        </span>
      </div>
    </div>
  )
}

export default Arrowbtn
