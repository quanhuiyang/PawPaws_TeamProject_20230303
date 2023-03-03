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
import useCart from '../../hooks/useCart'

export default function SingleProduct({ product, matches }) {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
    closeProductDetailDialog,
  ] = useDialogModal(ProductDetail)

  const { addToCart, addToCartText } = useCart(product)

  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductTag product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
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
