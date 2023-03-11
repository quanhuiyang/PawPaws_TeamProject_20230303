import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux"
import { 
  IconButton, 
  Box, 
  Typography, 
  Button 
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../styles/theme";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // present the count that add to the cart
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { 
    category, 
    price, 
    name, 
    image 
  } = item.attributes;

  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
  <>
  {/* Item Card */}
	<Box width = {width}>
    {/* Image */}
    <Box //If the mouse is over it will present count and plus minus button
      position="relative"
      onMouseOver = {() => setIsHovered(true)}
      onMouseOut = {() => setIsHovered(false)}
      >
        {/* Data from the backend */}
        <img
          alt={item.name}
          width="285px"
          height="270px"
          src={`http://localhost:3000${url}`}
          // lead to ItemDetails page
          onClick= {() => navigate(`/item/${item.id}`)}
          style= {{ cursor: "pointer" }}
        />

      <Box //If the button is over it will display the counts
        display={isHovered ? "blocked" : "none"}
        position="absolute"
        bottom="10%"
        left="0"
        width="100%"
        padding="0 5%"
      >
        {/* AMOUNT */}
        <Box 
          display="flex" 
          justifyContent="space-between"
        >
            {/* Buttons - plus count & Minus count */}
            <Box 
              display="flex" 
              alignItems="center" 
              backgroundColor={shades.primary[300]} 
              borderRadius="3px"
            >
              {/* 1. decrease button*/}
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              {/* 2. count*/}
              <Typography color={shades.blue[500]}>{count}</Typography>
              {/* 3. add button*/}
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            {/* BUTTON */}
            <Button onClick={() => {dispatch(addToCart( { item:{ ...item, count } } ));
            }}
            sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
            加入購物車
            </Button>
        </Box>
      </Box>
    </Box>
    {/* item name & price */}
    <Box mt="3px">
      {/* CATEGORY from the stipe*/}
      <Typography variant="h2" color="gray">
      {category
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())}
      </Typography>
      <Typography>{name}</Typography>
      <Typography fontWeight="bold">${price}</Typography>
    </Box>
  </Box>
  </>
  );
};

export default Item