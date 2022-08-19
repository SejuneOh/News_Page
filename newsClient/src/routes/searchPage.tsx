import styled from "styled-components";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  position: relative;
  top: 140px;
  height: 100vh;
`;

export default function searchPage() {
  return (
    <Container>
      <SearchBar />
      {/* <NewsList></NewsList> */}
    </Container>
  );
}
