import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsListModel, NewsModel } from "./../models/newsModel";

export const initState: NewsListModel = {
  lastBuildDate: "",
  total: 0,
  start: 1,
  display: 20,
  items: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState: initState,
  reducers: {
    getNews(state, action: PayloadAction<NewsModel>) {
      //
    },
  },
});

export default newsSlice;
