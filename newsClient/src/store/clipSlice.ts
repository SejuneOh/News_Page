import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsModel } from "../models/newsModel";

export interface ClipList {
  clipList: Array<NewsModel>;
}

const clipInitState: ClipList = {
  clipList: [],
};

const clipSlice = createSlice({
  name: "clips",
  initialState: clipInitState,
  reducers: {
    getClips(state, action: PayloadAction<Array<NewsModel>>) {
      state.clipList = action.payload;
    },
    removeClip(state, action) {},
    fetchClip(state, action) {},
  },
});

export default clipSlice;
