import { createSlice } from "@reduxjs/toolkit";

// storing the data
const initialState = {
  value: 10,
};

export const counterSlices = createSlice({
  name: "counterSlices",
  initialState,
  reducers: {
    increment: (state, actions) => {
      state.value += 1;
    },
    decrement: (state, actions) => {
      state.value -= 1;
    },
    multiplyByTwo: (state, actions) => {
      state.value = state.value * 2;
    },
    addthisValue: (state, actions) => {
      state.value = state.value + actions.payload;
    },
  },
});

export const { increment, decrement, multiplyByTwo, addthisValue } =
  counterSlices.actions;

export default counterSlices.reducer;
