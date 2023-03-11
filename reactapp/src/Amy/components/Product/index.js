import { useMediaQuery, Grid, Container } from "@mui/material"
import { useTheme } from "@mui/material/styles"
// import { products } from "../../data/index";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import AppPagination from "../Pagination/index"
import { useState } from "react";

export default function Product(){

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	//分頁設定
	const [products, setProducts] = useState([]);

	//Product參數設定
	const renderProducts = products.map( product => (
		<Grid 
		item 
		key={product.id} 
		xs={2}
		sm={4}
		md={4}
		display= "flex" 
		flexDirection= {"column"}
		alignItems = "center">
			{ matches ? (<SingleProduct product={product} matches= {matches}/>) : (<SingleProductDesktop product={product} matches= {matches}/>)}
		</Grid>
	));

	return(
		<Container>
			<Grid
			container
			spacing={{xs:2, md:3}}
			justifyContent = {"center"}
			sx={{ margin: "20px 4px 10px 4px" }}
			columns={{sx:4, sm:6, md:12}}
			>
				{ renderProducts }
			</Grid>
			<AppPagination setProducts={(p)=> setProducts(p)}/>
		</Container>
	);

}