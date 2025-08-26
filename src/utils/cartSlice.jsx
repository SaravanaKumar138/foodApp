import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        item: []
    },
    reducers: {
        addItem: (state, action) => {
            state.item.push(action.payload);
        },
        removeItem: (state, action) => {
            const updatedstate = state.item.filter((item, index) => index != action.payload);
            state.item = updatedstate;
        },
        clearCart: (state) => {
            state.item.length = 0; //state.item.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;