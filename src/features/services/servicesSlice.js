import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from "../../server";

const initialState = {
   services: [],
   error: null,
   loading: false,
}

export const getServices = createAsyncThunk(
   "services/get",
   async (_, thunkAPI) => {
      try {
         const res = await fetch(`${serverUrl}/services`, {});
         const data = await res.json();
         if (data.error) {
            return thunkAPI.rejectWithValue(data.error);
         } else {
            return thunkAPI.fulfillWithValue(data);
         }
      } catch (error) {
         thunkAPI.rejectWithValue(error);
      }
   }
);

export const serviceSlice = createSlice({
   name: "services",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getServices.fulfilled, (state, action) => {
            state.services = action.payload;
            state.loading = false;
         })
         .addCase(getServices.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         })
         .addCase(getServices.pending, (state, action) => {
            state.loading = true;
         })
   },
});

export default serviceSlice.reducer;
