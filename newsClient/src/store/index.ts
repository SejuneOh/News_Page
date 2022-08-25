import { configureStore } from "@reduxjs/toolkit";
import termSlice from "./termsSlice";
import clipSlice from "./clipSlice";

const store = configureStore({
  reducer: {
    term: termSlice.reducer,
    clips: clipSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
