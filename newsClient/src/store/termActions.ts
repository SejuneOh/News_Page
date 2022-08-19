import termSlice from "./termsSlice";

const termActions = termSlice.actions;

export const getTermsHistory = () => {
  return (dispatch: any, getState: any) => {
    let data: any = localStorage.getItem("historys");
    let ret = JSON.parse(data);

    dispatch(termActions.getTermHistory(ret));
  };
};

export const setTerm = (term: string) => {
  return (dispatch: any, getState: any) => {
    // 예외처리
    if (term.length <= 0) return;

    let data: any = localStorage.getItem("historys");
    let ret = JSON.parse(data);
    const setObj = new Set<string>(ret);

    // 중복제거
    if (setObj.has(term)) setObj.delete(term);

    // 맨마지막으로 추가
    setObj.add(term);
    const resultTerms = Array.from(setObj);

    localStorage.setItem("historys", JSON.stringify(resultTerms));
    // terSetting
    dispatch(termActions.setTerm(term));
    dispatch(termActions.fetchTermHistory(resultTerms));
  };
};

export const delTerm = (term: string) => {
  return (dispatch: any, getState: any) => {
    const termArr: Array<string> = getState().term.termHistory;

    if (termArr.length === 0) return;

    const setObj = new Set<string>(termArr);
    let resultArr: Array<string> = [];

    if (setObj.has(term)) setObj.delete(term);
    resultArr = Array.from(setObj);
    localStorage.setItem("historys", JSON.stringify(resultArr));
    dispatch(termActions.delTermHistory(resultArr));
  };
};
