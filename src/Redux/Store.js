import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reCard } from "./Card";
// import { reProfile } from "./Profile";

const reducer = combineReducers({
  card: reCard,
  // card: reProfile,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
