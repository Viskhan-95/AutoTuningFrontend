import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { serverUrl } from "../../server";

const initialState = {
   reviews: [],
   error: null,
   loading: false,
};

export const getReviews = createAsyncThunk(
   "reviews/get",
   async ({id}, thunkAPI) => {
      try {
         const res = await fetch(`${serverUrl}/reviews/${id}`)
         const data = await res.json();
         return data;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);
export const postReview = createAsyncThunk(
   "reviews/add",
   async ({ id, rating, plusText, minusText }, thunkAPI) => {
      const state = thunkAPI.getState();
      try {
         const res = await fetch(`${serverUrl}/reviews/${id}`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${state.usersReducer.token}`,
            },
            body: JSON.stringify({ servicesId: id, rating, plus: plusText, minus: minusText }),
         });
         return res.json();
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);
export const delReview = createAsyncThunk(
   "reviews/del",
   async (id, thunkAPI) => {
      const state = thunkAPI.getState();
      try {
         await fetch(`${serverUrl}reviews/${id}`, {
            method: "DELETE",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${state.usersReducer.token}`,
            },
         });
         return id;
      } catch (error) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const reviewSlice = createSlice({
   name: "reviews",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getReviews.fulfilled, (state, action) => {
            state.reviews = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(getReviews.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         })
         .addCase(getReviews.pending, (state, action) => {
            state.loading = true;
            state.error = null
         })
         .addCase(postReview.fulfilled, (state, action) => {
            state.reviews.push(action.payload)
            state.error = null
            state.loading = false
         })
         .addCase(postReview.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
         })
         .addCase(postReview.pending, (state, action) => {
            state.loading = true
            state.error = null
         })
         .addCase(delReview.fulfilled, (state, action) => {
            state.reviews = state.reviews.filter((id) => id._id !== action.payload)
            state.error = null
            state.loading = false
         })
         .addCase(delReview.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
         })
         .addCase(delReview.pending, (state, action) => {
            state.error = null
            state.loading = true
         })

   },
});
export default reviewSlice.reducer


