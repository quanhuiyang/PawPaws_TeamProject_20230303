import { ListItemButton, ListItemIcon, Divider, Badge } from '@mui/material'
import {
  MyList,
  ActionIconsContainerMobile,
  ActionIconsContainerDesktop,
} from '../../../styles/Bar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useNavigate } from 'react-router-dom'
import { useUIContext } from '../../context/UI'

//購物車狀態
// import { useDispatch, useSelector } from "react-redux";
// import { setIsCartOpen } from "../../state/index";

export default function Actions({ matches }) {
  const { cart, setShowCart } = useUIContext()

  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop

  // const dispatch = useDispatch();
  // // grab value cartSlice name: "cart" and initial state : cart:[]
  // const cart = useSelector((state) => state.cart.cart);

  const navigate = useNavigate()

  return (
    <>
      <Component>
        <MyList type="row">
          {/*1.購物車按鈕 */}
          {/*setIsCartOpen 給一個空物件，當購物車是空的時候，不要打開*/}
          <ListItemButton
            sx={{
              justifyContent: 'center',
            }}
            onClick={() => setShowCart(true)}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Badge badgeContent={cart && cart.length} color="secondary">
                <img src="/images/navbar/cart_green.png" alt="cart" />
              </Badge>
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          {/*2.愛心: 加入收藏按鈕 */}
          <ListItemButton
            sx={{
              justifyContent: 'center',
            }}
            onClick={() => {
              navigate('collection')
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <FavoriteBorderIcon color="secondary" />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          {/*3.會員按鈕 */}
          <ListItemButton
            sx={{
              justifyContent: 'center',
            }}
            onClick={() => {
              navigate('members')
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img src="/images/navbar/user_green.svg" alt="user" />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
        </MyList>
      </Component>
    </>
  )
}
