import { useEffect, useState } from "react";
import { SearchDiv, SearchList, Wrapper } from "../styles/SearchBar";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import searchIcon from "../assets/search.svg";
import { delTerm, getTermsHistory, setTerm } from "../store/termActions";

export default function SearchBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector((state) => state.term.termHistory);

  const searchInputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    // 1초뒤에 검색할 수 있도록 변경한다.
    const searchTime = setTimeout(() => {
      //  로컬 스토리지 저장
      dispatch(setTerm(searchVal));
    }, 1000);

    // 1초뒤에  검색 timeout 정의
    return () => {
      clearTimeout(searchTime);
    };
  }, [searchVal]);

  // 최초실행
  useEffect(() => {
    dispatch(getTermsHistory());
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
        {/* <SearchList className="open"> */}
        {searchHistory &&
          searchHistory.map((data, idx) => {
            return (
              <li key={idx}>
                {data}
                <div
                  className="historyDelete"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(delTerm(data));
                  }}
                ></div>
              </li>
            );
          })}
      </SearchList>
    </Wrapper>
  );
}
