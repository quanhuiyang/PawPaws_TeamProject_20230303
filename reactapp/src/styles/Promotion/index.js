import { Box, Typography} from "@mui/material";
import  { shades } from "../theme";
import { styled } from "@mui/material/styles";


export const PromotionsContainer = styled(Box)(({theme})=> ({
  [ theme.breakpoints.up("md")]: {
    padding: "10px 0px 10px 0px",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0px 10px 0px",
  //固定底部按鈕不要移動
  overflow: "hidden",
  background: shades.secondary[500],
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Noto Sans Arabic","sans-serif"',
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
  color: shades.beige_light[100],
  fontSize: "1rem",
}));