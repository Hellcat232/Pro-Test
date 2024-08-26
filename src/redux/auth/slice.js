import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refresh,
  loginFromGoogle,
} from "./operations";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { email: null, id: null },
    sid: null,
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = action.payload.sid;
        state.user = action.payload.userData;
      })
      .addCase(register.rejected, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.user = null;
      })
      .addCase(login.pending, (state, action) => {
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.refreshToken = null;
        state.sid = null;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.user = action.payload.userData;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.sid = null;
        state.user = null;
      })
      .addCase(logout.pending, (state, action) => {
        // state.accessToken = action.payload.accessToken;
        // state.refreshToken = null;
        // state.sid = null;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        // state.user = action.payload.userData;
      })
      .addCase(logout.fulfilled, (state) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.sid = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.user = null;
      })
      .addCase(refresh.pending, (state, action) => {
        // state.accessToken = action.payload.accessToken;
        // state.refreshToken = action.payload.refreshToken;
        // state.sid = null;
        state.isLoggedIn = false;
        state.isRefreshing = true;
        // state.user = action.payload.userData;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        // state.user = action.payload.userData;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
