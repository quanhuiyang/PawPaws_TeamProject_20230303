import { Box, Typography} from "@mui/material";
import { shades } from "../theme";
import { styled } from "@mui/material/styles";
import "@fontsource/michroma"; // Defaults to weight 400.

export const BannerContainer = styled( Box )(({ theme })=>({
	display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  // background: shades.gray[500],
    background: "#F3F2F0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));


export const BannerContent = styled( Box )(()=>({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "650px",
  padding: "40px",
  color: shades.beige_dark[900],
}));



export const BannerImage = styled("img")(({ src, theme } )=>({
  src:  `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  // width: "600px",
    maxWidth: "450px",
    [theme.breakpoints.down("md")]:{
      maxWidth: "450px",
    },
    [theme.breakpoints.down("sm")]:{
      maxWidth: "375px",
      height: "300px",
    },
}));


export const BannerTitle = styled( Typography )(( { matches, theme} )=> ({
  lineHeight: 1.5,
  // fontSize: "72px",
  fontSize: "65px",
  fontFamily: "michroma",
  color: shades.beige_dark[900],
  marginBottom: "20px",
  [theme.breakpoints.down('sm')]:{
    fontSize: "42px"
  }
}));

export const BannerDescription = styled( Typography )(({theme})=> ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]:{
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

