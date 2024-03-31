import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const { changeTheme } = appSlice.actions;

export default appSlice.reducer;
