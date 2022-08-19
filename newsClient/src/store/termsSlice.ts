import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TermModel } from "./../models/termsModel";

const initState: TermModel = {
  term: "",
  termHistory: [],
};

const termSlice = createSlice({
  name: "term",
  initialState: initState,
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
    getTermHistory(state, action: PayloadAction<string[]>) {
      state.termHistory = action.payload;
    },
    fetchTermHistory(state, action: PayloadAction<string[]>) {
      state.termHistory = action.payload;
    },
    delTermHistory(state, action: PayloadAction<string[]>) {
      state.termHistory = action.payload;
    },
  },
});

export default termSlice;
