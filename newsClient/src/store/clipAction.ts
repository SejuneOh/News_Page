import clipSlice from "./clipSlice";

export const clipSliceActions = clipSlice.actions;

export const getClips = () => {
  return (dispatch: any, getState: any) => {
    console.log("getclips", getState());
  };
};
