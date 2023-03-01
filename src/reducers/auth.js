import { createSlice } from "@reduxjs/toolkit";

const authState = { isAuth: false };
const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loginReducer(state) {
      state.isAuth = true;
    },
    logoutReducer(state) {
      state.isAuth = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
