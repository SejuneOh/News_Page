import styled from "styled-components";

export const NewsCardStyle = styled.div`
  border: 2px solid gray;
  margin: 5px 15px;
  border-radius: 5px;
  color: black;

  > span {
    display: block;
    margin: 4px 5px;
  }

  .wrapper {
    border: 1px solid blue;
    margin: 4px 5px;
    padding: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 28px;
    font-weight: 700;
  }

  .description {
    font-size: 20px;
    font-weight: 400;
  }

  .link {
    font-size: 15px;
    font-weight: 400;
    color: gray;
  }

  .date {
    font-size: 12px;
    font-weight: 400;
    color: gray;
  }
`;
