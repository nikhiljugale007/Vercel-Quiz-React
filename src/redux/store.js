import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import quizSlice from "./quizSlice";

export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    quizSlice: quizSlice,
    categorySlice: categorySlice,
  },
});
