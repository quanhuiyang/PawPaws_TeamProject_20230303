import { styled } from "@mui/material/styles";
import { shades, DrawerWidth } from "../theme";
import { Typography, List, IconButton, Box} from "@mui/material";


// Container
export const BarContainer = styled(Box)(()=>(
	{
		display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: '2px 8px',
    // position: "fixed",
    // // top: 0,
    // // width: "100%",
}
));

// Header
export const BarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"Noto Sans Arabic","sans-serif"',
  color: shades.secondary[500],

}));

// List for mobile
export const MyList = styled( List )(({ type }) => ({
    display: type === "row" ? "flex" : "block",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
    color: shades.gray[600], 
}));

// IconsButton
// export const IconContainer = styled(Box)(()=>(
// 	{
//     display : "flex",
//     justifyContent: "space-between",
//     // columnGap : "40px",
// }
// ));


export const ActionIconsContainerMobile = styled(Box)(() => ({
  display: 'flex',
  background: shades.beige_dark[200],
  position: "fixed",
  bottom: 0,
  left: 0,
  width: '100%',
  alignItems: 'center',
  zIndex: 99,  
  borderTop: `1px solid ${shades.secondary}`
})
);
export const ActionIconsContainerDesktop = styled(Box)(() => ({
    flexGrow: 0
})
);


export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,      
}));