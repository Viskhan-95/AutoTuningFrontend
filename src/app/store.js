import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import reviewSlice from "../features/reviews/reviewsSlice";
import serviceReducer from "../features/services/servicesSlice";
import  turnSlice  from "../features/turns/turnsSlice";
import callReqsSlice from "../features/callReqs/callReqsSlice";

export const store = configureStore({
   reducer: {
      usersReducer: usersReducer,
      review: reviewSlice,
      services: serviceReducer,
      turn: turnSlice,
      callReq: callReqsSlice
   }
});
