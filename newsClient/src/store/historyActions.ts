import historySlice from "./historySlice";

export const historyActions = historySlice.actions;

//실제 서비스에서 값을 가져와 redux에 값을 action으로 전달한다.
export const setLocalHistoryData = (term: string) => {
  return async (dispatch: any, getState: any) => {
    // 데이터 길이가 없으면 저장하지 않는다.
    if (term.length <= 0) return;

    // 데이터 가져오기
    let data: any = localStorage.getItem("historys");
    let ret = JSON.parse(data);

    ret.push(term);

    // 데이터 저장
    localStorage.setItem("historys", JSON.stringify(ret));
    dispatch(historyActions.setHistory(ret));
  };
};

export const getLocalHistoryData = () => {
  return (dispatch: any, getState: any) => {
    let data: any = localStorage.getItem("historys");
    let ret = JSON.parse(data);
    dispatch(historyActions.getHistory(ret));
  };
};
