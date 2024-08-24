import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { selectSid } from "./selectors";

axios.defaults.baseURL = "https://protest-backend.goit.global";

const setAccessToken = (accessToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

const setRefreshToken = (refreshToken) => {
  axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
};

const setSessionID = (sessionID) => {
  axios.defaults.data = `${sessionID}`;
};
const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (text, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", text, {
        headers: "Content-Type: application/json",
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (text, thunkAPI) => {
  try {
    const { data } = await axios.post("/auth/login", text, {
      headers: "Content-Type: application/json",
    });
    console.log(data);
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    setSessionID(data.sid);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post("/auth/logout");
    console.log(response.data);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (text, thunkAPI) => {
    try {
      const sid = thunkAPI.getState();

      const persistedSessionID = {
        sid: sid.auth.sid,
      };

      if (sid === null) {
        return thunkAPI.rejectWithValue("User not authorized");
      }

      const { data } = await axios.post("/auth/refresh", persistedSessionID, {
        headers: { Authorization: sid.auth.refreshToken },
      });

      setAccessToken(data.newAccessToken);
      setRefreshToken(data.newRefreshToken);

      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginFromGoogle = createAsyncThunk(
  "auth/google",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/auth/google");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
