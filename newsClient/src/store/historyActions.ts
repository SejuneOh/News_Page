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
    const setObj = new Set<string>(ret);

    // 중복제거
    if (setObj.has(term)) {
      setObj.delete(term);
    }

    setObj.add(term);

    // 배열로 변환
    const result: Array<string> = Array.from(setObj);

    // 데이터 저장
    localStorage.setItem("historys", JSON.stringify(result));

    // store로 전달
    dispatch(historyActions.setHistory(result));
  };
};

export const getLocalHistoryData = () => {
  return (dispatch: any, getState: any) => {
    let data: any = localStorage.getItem("historys");
    let ret = JSON.parse(data);
    dispatch(historyActions.getHistory(ret));
  };
};

export const deleteLocalHistroy = (term: string) => {
  return (dispatch: any, getState: any) => {
    let data: any = localStorage.getItem("historys");
    let ret = JSON.parse(data);
    const setObj = new Set<string>(ret);

    // 예외조건
    if (setObj.has(term)) setObj.delete(term);

    //결과
    const result = Array.from(setObj);

    // 데이터 저장
    localStorage.setItem("historys", JSON.stringify(result));
    dispatch(historyActions.deleteHistory(result));
  };
};
