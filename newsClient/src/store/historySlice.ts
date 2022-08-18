import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HistoryModel } from "./../models/historyModel";

const initState: HistoryModel = {
  list: [],
};

const historySlice = createSlice({
  name: "history",
  initialState: initState,
  reducers: {
    getHistory(state, action: PayloadAction<Array<string>>) {
      state.list = action.payload;
    },
    setHistory(state, action: PayloadAction<Array<string>>) {
      state.list = action.payload;
    },
  },
});

export default historySlice;
