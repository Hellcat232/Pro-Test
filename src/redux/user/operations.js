import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const user = createAsyncThunk("get/user", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/user");
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
