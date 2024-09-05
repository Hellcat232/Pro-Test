import { createSlice } from "@reduxjs/toolkit";
import { techTest, theoryTest, techResults, theoryResults } from "./operation";

export const testSlice = createSlice({
  name: "test",
  initialState: {
    test: {},
    title: "theory" | "tech",
    results: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(techTest.pending, (state, action) => {
        state.test = {};
        // state.theoryTest = {};
      })
      .addCase(techTest.fulfilled, (state, action) => {
        state.test = action.payload;
        state.title = "tech";
      })
      .addCase(techTest.rejected, (state, action) => {
        state.test = {};
        // state.theoryTest = {};
      })
      .addCase(theoryTest.pending, (state, action) => {
        // state.theoryTest = {};
        state.test = {};
      })
      .addCase(theoryTest.fulfilled, (state, action) => {
        state.title = "theory";
        state.test = action.payload;
      })
      .addCase(theoryTest.rejected, (state, action) => {
        // state.theoryTest = {};
        state.test = {};
      })
      .addCase(techResults.pending, (state, action) => {
        state.results = {};
      })
      .addCase(techResults.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(techResults.rejected, (state, action) => {
        state.results = {};
      })
      .addCase(theoryResults.pending, (state, action) => {
        state.results = {};
      })
      .addCase(theoryResults.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(theoryResults.rejected, (state, action) => {
        state.results = {};
      });
  },
});

export const testReducer = testSlice.reducer;
