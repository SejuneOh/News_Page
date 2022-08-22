import styled from "styled-components";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const Container = styled.div`
  position: relative;
  top: 140px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function searchPage() {
  return (
    <Container>
      <SearchBar />
      <NewsList></NewsList>
    </Container>
  );
}
