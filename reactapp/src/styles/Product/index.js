import { Box, IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { shades } from '../theme'
import { slideInBottom, slideInRight } from '../../Amy/animation/index'

//1.商品列表樣式
export const Product = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
}))

//2.商品圖背景樣式
export const ProductImage = styled('img')(({ src, theme }) => ({
  src: `url(${src})`,
  width: '100%',
  background: shades.beige_light[500],
  padding: '10px',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    padding: '24px',
  },
}))

//3.按鈕背景樣式
export const ProductActionButton = styled(IconButton)(() => ({
  background: shades.primary,
  margin: 4,
}))

//4.收藏按鈕樣式
export const ProductFavButton = styled(ProductActionButton)(
  ({ isFav, theme }) => ({
    color: isFav ? shades.secondary : shades.primary,
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      right: 0,
      top: 0,
    },
  })
)

//5.加入購物車按鈕樣式
export const ProductAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'show',
})(({ show, theme }) => ({
  width: '120px',
  fontSize: '16px',
  borderRadius: '20px',
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    bottom: '2%',
    width: '300px',
    padding: '10px 5px',
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: shades.primary,
  opacity: 0.9,
}))

//6.商品名價錢標籤箱
export const ProductTagWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

//7.按鈕箱
export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: show ? 'visible' : 'none',
    position: 'absolute',
    right: 0,
    top: '20%',
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}))
