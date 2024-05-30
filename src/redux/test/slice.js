import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({ name: "test", initialState: null });

export const testReducer = testSlice.reducer;
