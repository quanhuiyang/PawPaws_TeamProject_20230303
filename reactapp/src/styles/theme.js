import { createTheme } from "@mui/material/styles";

//command+k command+g 

export const DrawerWidth = 320;

export const shades ={
//yellow #ffb544
primary: {
    100: "#fff0da",
    200: "#ffe1b4",
    300: "#ffd38f",
    400: "#ffc469",
    500: "#ffb544",
    600: "#cc9136",
    700: "#996d29",
    800: "#66481b",
    900: "#33240e"
},
//gray #8dd9ce
secondary: {
    100: "#e8f7f5",
    200: "#d1f0eb",
    300: "#bbe8e2",
    400: "#a4e1d8",
    500: "#8dd9ce",
    600: "#71aea5",
    700: "#55827c",
    800: "#385752",
    900: "#1c2b29"
},
//indigo #2567a3
blue: {
    100: "#d3e1ed",
    200: "#a8c2da",
    300: "#7ca4c8",
    400: "#5185b5",
    500: "#2567a3",
    600: "#1e5282",
    700: "#163e62",
    800: "#0f2941",
    900: "#071521"
},
//black #000000
black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
},
//background(light) white #fff5ea
beige_light: {
    100: "#fffdfb",
    200: "#fffbf7",
    300: "#fff9f2",
    400: "#fff7ee",
    500: "#fff5ea",
    600: "#ccc4bb",
    700: "#99938c",
    800: "#66625e",
    900: "#33312f"
},
//background(dark) white #fee9d0
beige_dark: {
    100: "#fffbf6",
    200: "#fff6ec",
    300: "#fef2e3",
    400: "#feedd9",
    500: "#fee9d0",
    600: "#cbbaa6",
    700: "#988c7d",
    800: "#665d53",
    900: "#332f2a"
},
//red: #ff6248
orange_red: {
    100: "#ffe0da",
    200: "#ffc0b6",
    300: "#ffa191",
    400: "#ff816d",
    500: "#ff6248",
    600: "#cc4e3a",
    700: "#993b2b",
    800: "#66271d",
    900: "#33140e"
},
//purple #868686
gray: {
    100: "#e7e7e7",
    200: "#cfcfcf",
    300: "#b6b6b6",
    400: "#9e9e9e",
    500: "#868686",
    600: "#6b6b6b",
    700: "#505050",
    800: "#363636",
    900: "#1b1b1b"
},
};

// const theme = createTheme({});
export const theme = createTheme({
    
	palette:{
		primary:{
			main: shades.primary[500]
		},
		secondary:{
			main: shades.secondary[500]
		},
		blue:{
			main: shades.blue[500]
		},
		black:{
			main: shades.black[500]
		},
		beige_light:{
			main: shades.beige_light[500]
		},
		beige_dark:{
			main: shades.beige_dark[500]
		},
		orange_red:{
			main: shades.orange_red[500]
		},
		gray:{
			main: shades.gray[500]
		},
	},

	typography: {
		fontFamily:["Noto Sans Arabic","sans-serif"].join(","),
		fontSize:16,
	},
	h1: {
		fontFamily:["Noto Sans Arabic","sans-serif"].join(","),
		fontSize:75,
	},
	h2: {
		fontFamily:["Noto Sans Arabic","sans-serif"].join(","),
		fontSize:50,
	},
	h3: {
		fontFamily:["Noto Sans Arabic","sans-serif"].join(","),
		fontSize:32,
	},
	h4: {
		fontFamily:["Noto Sans Arabic","sans-serif"].join(","),
		fontSize:24,
	},
	h5: {
		fontFamily:["Noto Sans Arabic","sans-serif"].join(","),
		fontSize:18,
	},
    
    h6: {
		fontFamily:["Noto Sans Arabic","sans-serif"].join(","),
		fontSize:14,
	},

    components: {
        MuiButton: {
            defaultProps: {
            disableRipple: true,
            disableElevation: true
            },
        }, 
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    width: DrawerWidth,          
                    background: shades.secondary[500],
                    color: shades.beige_light[300]
            }
        }
        },
    },     
});

// export const Colors = {
//     primary: "#ffb544",
//     primary2:"#5f2c3e",
//     secondary: "#8dd9ce",
//     secondary2:"#d1adcc",
//     success: "#8dd9ce",
//     info:"#2567a3",
//     danger:"#ff6248",
//     warning:"#ffb544",
//     dark:"#fee9d0",
//     light:"#fff5ea",
//     border:"#8dd9ce",
//     gray:"#868686",
//     white: "#fff",
//     black:"#000",

// }


export default theme;