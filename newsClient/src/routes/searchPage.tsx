import styled from "styled-components";
import SearchBar from "../componets/SearchBar";

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  top: 140px;
  height: 100vh;
`;

export default function searchPage() {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
}
