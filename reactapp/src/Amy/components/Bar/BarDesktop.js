import { BarContainer, BarHeader, MyList } from '../../../styles/Bar'
import { ListItemText, ListItemButton } from '@mui/material'
import Actions from './Actions'
import { useNavigate } from 'react-router-dom'

export default function BarDesktop({ matches }) {
  const navigate = useNavigate()

  return (
    <>
      <BarContainer>
        <BarHeader>
          <img src="/images/logo.svg" alt="Logo" />
        </BarHeader>
        <MyList type="row">
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              navigate('home')
            }}
          >
            <ListItemText primary="首頁" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              navigate('shop')
            }}
          >
            <ListItemText primary="寵物商城" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              navigate('hotel')
            }}
          >
            <ListItemText primary="寵物飯店" />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 4 }}
            onClick={() => {
              navigate('activity')
            }}
          >
            <ListItemText primary="寵物活動" />
          </ListItemButton>
          {/* <ListItemButton>
					<img src="/images/navbar/search.svg" alt="search"/>
				</ListItemButton> */}
        </MyList>
        <Actions matches={matches} />
      </BarContainer>
    </>
  )
}
