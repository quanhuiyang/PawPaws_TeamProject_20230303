import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Heartbtn(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    alert("收藏成功");
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <div onClick={handleClick}>
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}

export default Heartbtn;
