import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({ name: "user", initialState: null });

export const userReducer = userSlice.reducer;
