import { BarContainer, BarHeader } from '../../../styles/Bar'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
// import SearchIcon from "@mui/icons-material/Search"
import { ListItemButton } from '@mui/material'
import Actions from './Actions'
import { useUIContext } from '../../context/UI/index'
import { useNavigate } from 'react-router-dom'

export default function BarMobile({ matches }) {
  const { setDrawerOpen } = useUIContext()
  const navigate = useNavigate()

  return (
    <BarContainer>
      <IconButton color="secondary" onClick={() => setDrawerOpen(true)}>
        <MenuIcon fontSize="medium" />
      </IconButton>
      <BarHeader>
        <ListItemButton
          sx={{
            justifyContent: 'center',
          }}
          onClick={() => {
            navigate('home')
          }}
        >
          <img src="/images/logo.svg" alt="Logo" />
        </ListItemButton>
      </BarHeader>
      {/* <IconButton color="secondary" >
				<SearchIcon fontSize="medium"/>	
			</IconButton> */}
      <Actions matches={matches} color="secondary" />
    </BarContainer>
  )
}
