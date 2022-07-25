import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import reviewSlice from "../features/reviews/reviewsSlice";


export const store = configureStore({
    reducer: {
        usersReducer: usersReducer, 
        review: reviewSlice

    }
})