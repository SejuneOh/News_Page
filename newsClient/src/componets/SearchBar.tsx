import { SearchDiv, SearchList, Wrapper } from "../styles/SearchBar";
import searchIcon from "../assets/search.svg";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import {
  getLocalHistoryData,
  setLocalHistoryData,
} from "../store/historyActions";

export default function SearchBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector((state) => state.history.list);

  const searchInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    // 1초뒤에 검색할 수 있도록 변경한다.
    const searchTime = setTimeout(() => {
      //  로컬 스토리지 저장
      dispatch(setLocalHistoryData(searchVal));
      //  검색항목 데이터로 전달
    }, 1000);

    // 1초뒤에  검색 timeout 정의
    return () => {
      clearTimeout(searchTime);
    };
  }, [searchVal]);

  useEffect(() => {
    dispatch(getLocalHistoryData());
    console.log(
      "🚀 ~ file: SearchBar.tsx ~ line 15 ~ SearchBar ~ searchHistory",
      searchHistory
    );
  }, []);

  return (
    <Wrapper>
      <SearchDiv>
        <input
          className="searchInput"
          type="text"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onChange={searchInputHandle}
          value={searchVal}
        />
        <span className={open ? "caret" : "caret open"}></span>
        <div className="searchIcon">
          <img src={searchIcon} alt="searchIcon"></img>
        </div>
      </SearchDiv>
      <SearchList className={open ? "" : "close"}>
        {searchHistory &&
          searchHistory.map((data, idx) => {
            return <li key={idx}>{data}</li>;
          })}
      </SearchList>
    </Wrapper>
  );
}
