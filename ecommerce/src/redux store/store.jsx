import { configureStore } from "@reduxjs/toolkit";

import counterSlicesReducers from "./slices/counterSlices";
import apiCallDataSlice from "./slices/apiCallDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlicesReducers,
    apiData: apiCallDataSlice,
  },
});
