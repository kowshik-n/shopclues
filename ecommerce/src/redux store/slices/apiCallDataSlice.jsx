import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selectedCategory: [],
  seletedProduct: [],
};

const apiCallDataSlice = createSlice({
  name: "apiCallDataSlice",
  initialState,
  reducers: {
    fetchApi: (state, actions) => {
      state.categories = actions.payload;
    },
    selectedCategory: (state, actions) => {
      state.selectedCategory = actions.payload;
    },
    selectedProduct: (state, actions) => {
      state.seletedProduct = actions.payload;
    },
  },
});

export const { fetchApi, selectedCategory, selectedProduct } =
  apiCallDataSlice.actions;
export default apiCallDataSlice.reducer;
