import { createSlice } from "@reduxjs/toolkit";
import { user } from "../user/operations";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null, firstSpell: null },
  extraReducers: (builder) => {
    builder
      .addCase(user.pending, (state, action) => {
        state.user = null;
        state.firstSpell = null;
      })
      .addCase(user.fulfilled, (state, action) => {
        let username = action.payload.email.split("@")[0];

        state.user = username.replace(/[^a-zA-Z]/g, "");
        state.firstSpell = state.user.slice(0, 1);
      })
      .addCase(user.rejected, (state, action) => {
        state.user = null;
        state.firstSpell = null;
      });
  },
});

export const userReducer = userSlice.reducer;
