import React from 'react'
import Product from '../Amy/components/Product/index'
import Banner from '../Amy/components/Banner/index'
import { Box, Typography } from '@mui/material'

function Shop() {
  return (
    <>
      <Banner />
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h6">上架商品</Typography>
      </Box>
      <Product />
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h6"> </Typography>
      </Box>
    </>
  )
}

export default Shop
