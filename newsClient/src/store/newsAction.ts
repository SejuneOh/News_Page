import { RootState } from "./index";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { newsSlice } from "./newsSlice";
import newsServcie from "../services/newsServcie";

export const newsActions = newsSlice.actions;

export const getNewsList = (term: string, cnt: number) => {
  return async (dispatch: any, getState: any) => {
    if (term.length > 0) {
      const res = await newsServcie.getNewsData(term, cnt);
    }
  };
};
