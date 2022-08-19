import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 32.5%;
`;

export const SearchDiv = styled.div`
  width: 600px;
  height: 45px;
  border: 3px solid #03cf5b;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;

  .searchInput {
    width: 450px;
    height: 40px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .caret {
    border-style: solid;
    border-color: #03cf5b transparent transparent;
    border-width: 5px 5px 0;
    transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
    width: 0;
    height: 0;
    margin-left: 10px;
    position: absolute;
    top: 50%;
    right: 50px;

    &.open {
      transform: rotate(180deg);
    }
  }

  .searchIcon {
    width: 45px;
    height: 47px;
    border: 1px solid #03cf5b;
    background-color: #03cf5b;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    position: absolute;
    top: -1px;
    right: -1px;
  }
`;

export const SearchList = styled.ul`
  width: 604px;
  height: 400px;
  border: 2px solid #e4e7e8;
  box-sizing: border-box;
  position: absolute;
  z-index: 2;
  background-color: #fff;
  transition: height 0.4s;

  &.close {
    height: 0;
    opacity: 0;
  }

  > li {
    margin: 4px 6px;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .historyDelete {
    height: 15px;
    width: 15px;
    background-color: #fff;
    background-image: url("/src/assets/closeIcon.png");
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
  }
`;
