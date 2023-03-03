import React from "react";
import "../styles/arrowbtn.css";
import "../styles/acard.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PetsIcon from "@mui/icons-material/Pets";

function Arrowbtn(props) {
  return (
    <div className="wrap">
      <div className="title">
        <span className="stitle">
          <PetsIcon />
          <h2>{props.name}</h2>
        </span>

        <div>
          {/* <button className="L-btn">
            <KeyboardDoubleArrowLeftIcon />
          </button>
          <button className="R-btn">
            <KeyboardDoubleArrowRightIcon />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Arrowbtn;
