import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import locationReducer from "./locationSlice";
import routeReducer from "./routeSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    route: routeReducer,
  },
});
