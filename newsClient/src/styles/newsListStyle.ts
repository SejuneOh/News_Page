import styled from "styled-components";

export const Container = styled.section`
  position: fixed;
  top: 200px;
  /* border: 2px solid blue; */
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: scroll;
`;

export const DefaultDiv = styled.div`
  border: 1px solid red;
  height: 100%;
  display: flex;

  .alert {
    display: inline-block;
    font-size: 25px;
    position: relative;
    left: 44.5%;
    top: 30%;
    height: 27px;
  }
`;
