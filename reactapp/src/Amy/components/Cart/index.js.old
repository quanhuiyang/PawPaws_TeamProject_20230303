import {
  Drawer,
  useMediaQuery,
  Box,
  Avatar,
  Typography,
  Divider,
  Paper,
  Button,
} from '@mui/material'
import { shades } from '../../../styles/theme'
import { useUIContext } from '../../context/UI'
import { useTheme } from '@mui/material/styles'

export default function Cart() {
  const { cart, setShowCart, showCart } = useUIContext()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
      <Box
        display="flex"
        sx={{ pt: 2, pb: 2 }}
        alignItems="start"
        justifyContent={'space-between'}
      >
        <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{item.name}</Typography>
          {!matches && (
            <Typography variant="subtitle2">{item.description}</Typography>
          )}
        </Box>
        <Typography variant="body1" justifyContent="end">
          ${item.price}
        </Typography>
      </Box>
      {matches && (
        <Typography variant="subtitle2">{item.description}</Typography>
      )}
      <Divider variant="inset" />
    </Box>
  ))

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: matches ? '100%' : 550,
          background: shades.beige_dark[500],
        },
      }}
    >
      {/* 手機版調整 三元運算 */}
      {cart.length > 0 ? (
        <Box
          sx={{ p: 4 }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h5" color={shades.beige_dark[900]}>
            購物車
          </Typography>
          <Typography variant="body1" color={shades.beige_dark[700]}>
            {''} 全館免運～優惠期間至2023/12/31
          </Typography>
          <Paper
            elevation={0}
            sx={{
              mt: 2,
              width: '90%',
              padding: 4,
            }}
          >
            {cartContent}
          </Paper>
          <Button sx={{ mt: 4 }} variant="contained">
            前往結帳
          </Button>
        </Box>
      ) : (
        <Box
          sx={{ p: 4 }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Typography
            variant={matches ? 'h6' : 'h5'}
            color={shades.beige_dark[700]}
          >
            購物車是空的
          </Typography>
        </Box>
      )}
      <Button onClick={() => setShowCart(false)}>【關閉】</Button>
    </Drawer>
  )
}
