import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "../reducers/UserReducers";

export const store = configureStore({
  reducer: {
    userReducer: UserReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
