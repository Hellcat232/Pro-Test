import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const techTest = createAsyncThunk("tech/test", async (_, thunkAPI) => {
  try {
    const accessToken = thunkAPI.getState();

    const response = await axios.get("/qa-test/tech", {
      headers: { Authorization: accessToken.auth.accessToken },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const theoryTest = createAsyncThunk(
  "theory/test",
  async (_, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState();

      const response = await axios.get("/qa-test/theory", {
        headers: { Authorization: accessToken.auth.accessToken },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const techResults = createAsyncThunk(
  "tech/results",
  async (data, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState();

      const response = await axios.post("/qa-test/tech-results", data, {
        headers: { Authorization: accessToken.auth.accessToken },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const theoryResults = createAsyncThunk(
  "theory/results",
  async (data, thunkAPI) => {
    try {
      const accessToken = thunkAPI.getState();

      const response = await axios.post("/qa-test/theory-results", data, {
        headers: { Authorization: accessToken.auth.accessToken },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
