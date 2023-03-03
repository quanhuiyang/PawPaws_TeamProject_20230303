import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductActionButton,
  ProductAddToCart,
} from '../../../styles/Product/index'
import ProductTag from './ProductTag'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets'
import { shades } from '../../../styles/theme'
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../ProductDetail/index'
import useCart from '../../hooks/useCart'

export default function SingleProductDesktop({ product, matches }) {
  const [showOptions, setShowOptions] = useState(false)

  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail)

  const { addToCart, addToCartText } = useCart(product)

  const handleMouseEnter = () => {
    setShowOptions(true)
  }

  const handleMouseLeave = () => {
    setShowOptions(false)
  }
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isFav={0} sx={{ bgcolor: '#fff9f2' }}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart
            onClick={addToCart}
            show={showOptions}
            variant="contained"
            startIcon={<PetsIcon sx={{ color: shades.black[500] }} />}
          >
            {/* 加入購物車 */}
            {addToCartText}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="blue" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="blue" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductTag product={product} matches={matches} />
      <ProductDetailDialog product={product} />
    </>
  )
}
