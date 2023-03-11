import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../styles/theme";
import { setIsCartOpen } from "../state";

const Navbar = () => {
  const navigate  = useNavigate();
  const dispatch = useDispatch();
  //grab value cartSlice name: "cart" and initial state : cart:[]
  const cart = useSelector((state) => state.cart.cart);
  
  return (
  <>
  <div className="navbar">
	<Box  //navbar- outer box
    display="flex"
    alignItems="center"
    width="100%"
    height="100px"
    backgroundColor="#fff5ea"
    color="gray"
    position="fixed"
    top="0"
    left="0"
    zIndex="1"
    >
      <Box //navbar- inner box 
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      >
      {/* navbar- items */}
        {/* item 1 - logo */}
        <Box
          onClick={() => navigate("/")}
          // a css style when the pointer hover over it
          sx={{'&:hover': { cursor:"pointer" }}}
          color={shades.primary[500]}
          >
            <img src="/images/logo.svg" alt="Logo"/>
        </Box>
          {/* item 2 - icons*/}
          <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2">
            {/* 搜尋icon */}
            <IconButton sx={{color:"gray"}}>
              <SearchOutlined />
            </IconButton>
            {/* 會員icon */}
            <IconButton sx={{color:"gray"}}>
              <PersonOutline/>
            </IconButton>
            {/* 購物車icon */}
            {/* 購物車數量badge pass in numbers here */}
            <Badge
              badgeContent={cart.length}
              color ="primary"
              invisible={cart.length === 0}
              sx={{
                "& .MuiBadge-badge":{
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                },
              }}
            >
            <IconButton 
            //setIsCartOpen 給一個空物件，當購物車是空的時候，不要打開
            onClick={()=> dispatch(setIsCartOpen({}))}
            sx={{ color: "gray"}}>
              <ShoppingCartOutlined />
            </IconButton>
            </Badge>
            {/* 選單icon */}
            <IconButton sx={{ color: "gray"}}>
              <MenuOutlined/>
            </IconButton>
          </Box>
      </Box>
  </Box>
  </div>
  </>
  )
}

export default Navbar