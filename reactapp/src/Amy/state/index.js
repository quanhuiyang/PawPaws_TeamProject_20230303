// state management use redux
import { createSlice } from "@reduxjs/toolkit";

// the state you can store and access anywhere in the application
const initialState = {
	isCartOpen: false,
	cart:[],
	items: [],
}

export const cartSlice = createSlice(
	{
		name: "cart",
		initialState,
		// actions create
		reducers: {

			//變更購物車內容
			//setItems: change items when action payload			
			setItems: (state, action) => {
				state.items = action.payload;
			},
			//加入購物車
			addToCart: (state, action) => {
				state.cart = [...state.cart, action.payload.item]
			},
			//刪除內容
			// stay items when the item id not equal to the action payload id 
			removeFromCart: (state, action) => {
				state.cart = state.cart.filter((item) => item.id !== action.payload.id);
			},
			//增加數量
			// map through the entire cart to find out which count we want to update
			increaseCount: (state, action) => {
				state.cart = state.cart.map((item) => {
					if (item.id === action.payload.id){
						item.count++;
					}
					return item;
				});
			},
			//減少數量
			//確保數量大於一
			decreaseCount: (state, action) => {
				state.cart = state.cart.map((item) => {
					if (item.id === action.payload.id && item.count > 1){
						item.count--;
					}
					return item;
				});
			},
			//toggle
			setIsCartOpen: (state) =>{
				state.isCartOpen = !state.isCartOpen;
			}
		}
	});

// export all of these actions
export const {
	setItems,
	addToCart,
	removeFromCart,
	increaseCount,
	decreaseCount,
	setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;