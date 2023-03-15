import {
  Product,
  ProductActionsWrapper,
  ProductFavButton,
  ProductImage,
  ProductActionButton,
  ProductAddToCart,
} from '../../../styles/Product/index'
import ProductTag from '../Product/ProductTag'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import FitScreenIcon from '@mui/icons-material/FitScreen'
import PetsIcon from '@mui/icons-material/Pets'
import { shades } from '../../../styles/theme'
import useDialogModal from '../../hooks/useDialogModal'
import ProductDetail from '../ProductDetail/index'
import { useCart } from '../../hooks/useCart'
import { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function SingleProduct({ product, matches }) {
  // const [isFav, setIsFav] = useState(false)
	const [isFav, setIsFav] = useState(() => {
    const value = window.localStorage.getItem(`fav-${product.id}`)
    return value ? JSON.parse(value) : false
	})


  // const toggleFav = () => {
  //   setIsFav(!isFav)
  // }
	const toggleFav = () => {
    const newValue = !isFav
    setIsFav(newValue)
    window.localStorage.setItem(`fav-${product.id}`, JSON.stringify(newValue))
  }

  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail)

  //const { addToCart, addToCartText } = useCart(product);

  const { addItem, isInCart, removeItem } = useCart()

  const addToCart = () => {
    return isInCart(product.id)
      ? removeItem(product.id)
      : addItem({ ...product, quantity: 1 })
  }

  const addToCartText = isInCart(product.id) ? '移除' : '加購物車'

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductTag product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={isFav} onClick={toggleFav}>
              {isFav ? (
                <FavoriteIcon sx={{ color: '#ff816d' }} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="blue" />
            </ProductActionButton>

            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="blue" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart
        onClick={addToCart}
        variant="contained"
        startIcon={<PetsIcon sx={{ color: shades.black[500] }} />}
      >
        {addToCartText}
      </ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  )
}
