import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import "../styles/acard.css";
import Heartbtn from "./Heartbtn";
import "@splidejs/react-splide/css";
import { dataObj } from "./data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Acard() {
  const navigate = useNavigate();

  const jump = () => {
    navigate("/activity/detail");
  };

  return (
    <div className="wrap">
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {dataObj.map((item) => (
          <SplideSlide>
            <div className="card">
              <div className="heart">
                <Heartbtn />
              </div>
              <img src={item.linkImg} alt="" />
              <div className="location">
                <div className="city">
                  <LocationOnRoundedIcon />
                  <p>{item.county}</p>
                </div>
                <button className="btn" onClick={jump}>
                  我要報名
                </button>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Acard;
