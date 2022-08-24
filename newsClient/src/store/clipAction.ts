import { NewsModel } from "./../models/newsModel";
import clipSlice from "./clipSlice";

export const clipSliceActions = clipSlice.actions;

// 최초 클립 리스트 가져오기
export const getClips = () => {
  return (dispatch: any, getState: any) => {
    const data: any = localStorage.getItem("clips");
    const ret = JSON.parse(data);
    dispatch(clipSliceActions.getClips(ret));
  };
};

// clip 데이터 붙이기
export const fetchClip = (clip: NewsModel) => {
  return (dispatch: any, getState: any) => {
    const data: any = localStorage.getItem("clips");
    const localClips = JSON.parse(data);

    // 저장
    localClips.push(clip);
    // 로컬스토리지 저장
    localStorage.setItem("clips", JSON.stringify(localClips));
    // redux 저장
    dispatch(clipSliceActions.fetchClip(localClips));
  };
};

// 삭제
export const removeClip = (link: string) => {
  return (dispatch: any, getState: any) => {
    if (getState().clips.clipList.length > 0) {
      const data: any = localStorage.getItem("clips");
      const localClips = JSON.parse(data);

      const filterData = localClips.filter(
        (item: NewsModel) => item.link !== link
      );

      localStorage.setItem("clips", JSON.stringify(filterData));
      dispatch(clipSliceActions.removeClip(filterData));
    }
  };
};
