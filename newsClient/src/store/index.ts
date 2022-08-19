import { newsSlice } from "./newsSlice";
import { configureStore } from "@reduxjs/toolkit";
import termSlice from "./termsSlice";

const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
    term: termSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
