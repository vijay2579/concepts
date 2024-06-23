import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./api/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
