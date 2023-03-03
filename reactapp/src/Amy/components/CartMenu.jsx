import React from 'react'
import { 
	Box, 
	Button, 
	Divider, 
	IconButton, 
	Typography 
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../styles/theme";
import { 
	useSelector, 
	useDispatch 
} from "react-redux";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../state/index";
import { useNavigate } from "react-router-dom";


const FlexBox = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
` ;

const CartMenu = () =>{
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cart = useSelector((state)=> state.cart.cart);
	const isCartOpen = useSelector((state)=> state.cart.isCartOpen);

	const totalPrice = cart.reduce((total, item)=> {
		// Stripe api : item.attribute.(property)
		return total + item.count * item.attribute.price;
	}, 0);

	return(
		// fullscreen: dark section + modal (childComponent)
		// outer
		<Box //overlay dark section
			display={ isCartOpen ? "block" : 'none' }
			backgroundColor="rgba(0,0,0,0.4)"
			position="fixed"
			zIndex={10}
			width="100%"
			height="100%"
			left="0"
			top="0"
			overflow="auto"
		>
			{/* MODAL */}
			<Box // white section
				position="fixed"
				right="0"
				bottom="0"
				width="max(375px, 30%)"
				height="100%"
				backgroundColor="#fee9d0"
				>
				{/* CONTENT */}
				<Box //inside the modal
					padding= "20px"
					overflow="auto"
					height="100%"
				>
					{/* 1. HEADER section */}
					<FlexBox //mb- marginButton 15px
						mb="15px"> 
						{/* show how many items in the cart */}
						<Typography variant="h5">購物車({cart.length})</Typography>
						<IconButton onClick={()=> dispatch(setIsCartOpen({}))}>
							<CloseIcon/>
						</IconButton>
					</FlexBox>

					{/* 2. CART LIST section */}
					<Box //every single item - map through each one
					>
						{cart.map((item) => (
							// Stripe api : item.attribute.(property)
							// items from backend with unique key
							<Box key={`${item.attribute.name}-${item.id}`}>
								
								{/* Layout */}
								{/* p- padding top&bottom:15px left&right:0px */}
								<FlexBox p="15px 0">
									{/* 2-1. Product img */}
									{/* flex- flex-grow:1 flex-strength:1 width:40% */}
									<Box flex="1 1 40%">
										{/* Stripe backend url located: 1337 */}
										<img
										alt={item?.name}
										width="123px"
										height="164px"
										src={`http://localhost:3000${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
										/>
									</Box>
									{/* 2-2. Product */}
									<Box flex="1 1 60%">
										{/* Row- name + close icon */}
										{/* mb: margin-button */}
										{/* ITEM NAME */}
										<FlexBox mb="5px">
											{/* product name */}
											<Typography fontWeight="bold">
												{item.attributes.name}
											</Typography>
											{/* close icon */}
											<IconButton 
												onClick={()=> 
												dispatch(removeFromCart({ id: item.id }))
												}
											>
												<CloseIcon />
											</IconButton>
										</FlexBox>

										{/* Row- short description texts shows what the item mean*/}
										<Typography>{item.attributes.shortDescription}</Typography>

										{/* Row- decrease button & count & add button + price */}
										{/* AMOUNT  */}
										{/* m: margin for the top&button:15px left&right:0 */}
										<FlexBox m="15px 0">
											{/* Buttons */}
											<Box // no need to justify items space between so not use FlexBox
											display="flex"
											alignItems="center"
											border={`1.5px solid ${shades.secondary[500]}`}
											>
												{/* 1. decrease button*/}
												<IconButton
														onClick={() =>
															dispatch(decreaseCount({ id: item.id }))
														}
													>
													<RemoveIcon />
												</IconButton>
												{/* 2. count*/}
												<Typography>{item.count}</Typography>
												{/* 3. add button*/}
												<IconButton
														onClick={() =>
															dispatch(increaseCount({ id: item.id }))
														}
													>
													<AddIcon />
												</IconButton>
											</Box>
											{/* PRICE */}
											<Typography fontWeight="bold">${item.attributes.price}</Typography>
										</FlexBox>
									</Box>
								</FlexBox>
								<Divider />
							</Box>
						))}
					</Box>
					{/* 3. ACTIONS section */}
					{/* m: margin top&button 20px left&right 0 */}
					<Box m="20px 0">
						{/* Row- total + total price */}
						{/* m: margin top&button 20px left&right 0 */}
						<FlexBox m="20px 0">
							<Typography fontWeight="bold">總計：</Typography>
							<Typography fontWeight="bold">${totalPrice}</Typography>
						</FlexBox>
						{/* Row- checkout button */}
						<Button
							sx={{
								backgroundColor: shades.secondary[500],
								color: "white",
								borderRadius: 0,
								minWidth: "100%",
								padding: "20px 40px",
								m: "20px 0",
							}}
							onClick={() => {
								navigate("/checkout");
								dispatch(setIsCartOpen({}));
							}}
						>
							前往結帳
						</Button>
					</Box>

				</Box>
			</Box>
		</Box>
	);
};

export default CartMenu;