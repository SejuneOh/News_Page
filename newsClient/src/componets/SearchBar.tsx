import { SearchDiv, SearchList, Wrapper } from "../styles/SearchBar";
import searchIcon from "../assets/search.svg";
import { useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <SearchDiv>
        <input
          className="searchInput"
          type="text"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        <span className="caret"></span>
        <div className="searchIcon">
          <img src={searchIcon} alt="searchIcon"></img>
        </div>
      </SearchDiv>
      <SearchList className={open ? "" : "close"}></SearchList>
    </Wrapper>
  );
}
