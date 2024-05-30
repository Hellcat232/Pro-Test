import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const techTest = createAsyncThunk("tech/test", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/qa-test/tech");
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
      const response = await axios.get("/qa-test/theory");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const techResults = createAsyncThunk(
  "tech/results",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("/qa-test/tech-results");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const theoryResults = createAsyncThunk(
  "theory/results",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("/qa-test/theory-results");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
