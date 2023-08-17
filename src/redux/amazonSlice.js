import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    userInfo: [],
}

export const amazonSlice = createSlice({
    name: "amazon",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity;
            }
            else {
                state.products.push(action.payload)
            }
        },
        // ______________increment Part
        increaseQuantity: (state, action) => {
            const item = state.products.find(item => item.id === action.payload);
            if (item) {
                item.quantity++;
            }

        },
        // ______________decrement Part
        decreaseQuantity: (state, action) => {
            const item = state.products.find(item => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            }
            else {
                item.quantity--;
            }

        },
        // ______________Delete Part
        deleteItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload);
            // console.log(state.products);
        },
        resetCart: (state) => {
            state.products = [];
        },
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem, resetCart } = amazonSlice.actions;
export default amazonSlice.reducer;