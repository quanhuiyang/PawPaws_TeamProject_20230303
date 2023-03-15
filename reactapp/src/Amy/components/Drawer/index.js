import { Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import { useUIContext } from '../../context/UI'
import { DrawerCloseButton } from '../../../styles/Bar/index'
import CloseIcon from '@mui/icons-material/Close'
import { useNavigate } from 'react-router-dom'

export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext()
  const navigate = useNavigate()

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            className="testing"
            sx={{
              ontSize: '2.5rem',
              color: '#fee9d0',
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton
            onClick={() => {
              navigate('home')
            }}
          >
            <ListItemText align="center">首頁</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate('shop')
            }}
          >
            <ListItemText align="center">寵物商城</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate('hotel')
            }}
          >
            <ListItemText align="center">寵物飯店</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate('activity')
            }}
          >
            <ListItemText align="center">寵物活動</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate('logout')
            }}
          >
            <ListItemText align="center">登出</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  )
}
