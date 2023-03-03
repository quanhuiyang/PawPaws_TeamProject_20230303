import { ProductTagWrapper } from '../../../styles/Product'
import { Typography } from '@mui/material'

export default function ProductTag({ product, matches }) {
  // 產品標籤 品名＋價格

  return (
    <ProductTagWrapper>
      <Typography
        variant={matches ? 'body1' : 'h6'}
        sx={{ color: '#332f2a' }}
        lineHeight={2}
      >
        {product.name}
      </Typography>
      <Typography
        variant={matches ? 'body2' : 'body1'}
        sx={{ color: '#332f2a' }}
      >
        ${product.price}
      </Typography>
    </ProductTagWrapper>
  )
}
