import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  categoriesStatus: "idle",
};

const categorySlice = createSlice({
  name: "category",
  initialState,

  reducers: {
    setCategories: (state, acion) => {
      state.categories = acion.payload.categories;
    },
  },
});

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;
