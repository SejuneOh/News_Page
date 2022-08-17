import { SearchDiv, SearchList, Wrapper } from "../styles/SearchBar";
import searchIcon from "../assets/search.svg";

export default function SearchBar() {
  return (
    <Wrapper>
      <SearchDiv>
        <input className="searchInput" type="text" />
        <span className="caret"></span>
        <div className="searchIcon">
          <img src={searchIcon} alt="searchIcon"></img>
        </div>
      </SearchDiv>
      <SearchList></SearchList>
    </Wrapper>
  );
}
