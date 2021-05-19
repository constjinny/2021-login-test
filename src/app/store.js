import { configureStore } from "@reduxjs/toolkit";
import { userStateReducer } from "@features";

export default configureStore({
  reducer: { userStateReducer },
});
