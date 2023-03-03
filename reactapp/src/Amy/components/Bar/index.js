import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import BarDesktop from './BarDesktop'
import BarMobile from './BarMobile'

export default function Bar() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      {matches ? (
        <BarMobile matches={matches} />
      ) : (
        <BarDesktop matches={matches} />
      )}
    </>
  )
}
