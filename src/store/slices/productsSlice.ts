import {createSlice} from "@reduxjs/toolkit";

type T_ProductsSlice = {
    product_name: string
}

const initialState:T_ProductsSlice = {
    product_name: "",
}


const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        updateProductName: (state, action) => {
            state.product_name = action.payload
        }
    }
})

export const { updateProductName} = productsSlice.actions;

export default productsSlice.reducer