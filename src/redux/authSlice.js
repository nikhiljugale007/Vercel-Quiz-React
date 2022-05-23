import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  authToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem("authToken", action.payload.encodedToken);
      state.user = action.payload.foundUser;
      state.authToken = action.payload.encodedToken;
    },
    logoutUser: (state) => {
      localStorage.removeItem("authToken");
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { setLoggedUser, logoutUser, updateUser } = authSlice.actions;
export default authSlice.reducer;
