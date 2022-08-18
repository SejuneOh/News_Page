import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
  border: 1px solid gray;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #fff;
`;

const Title = styled.div`
  text-align: center;
  border-bottom: 1px solid #03cf5b;
  padding: 10px 0;
  .title {
    font-size: 40px;
    font-weight: 800;
    color: #03cf5b;
  }
`;

const Taps = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;

const Option = styled(Link)`
  display: block;
  font-size: 25px;
  text-decoration: none;
  width: 100%;
  height: 50px;
  font-weight: 500;
  border: 1px solid #dae1e6;
  line-height: 50px;
  cursor: pointer;

  &.active {
    color: white;
    background-color: #65c971;
  }

  &.disabled {
    background-color: #fff;
    color: black;
  }
`;

export default function Header() {
  const [active, setActive] = useState<boolean>(true);

  const activeHandle = () => {
    if (!active) setActive((prev) => !prev);
  };

  const disableHandel = () => {
    if (active) setActive((prev) => !prev);
  };

  return (
    <HeaderStyle>
      <Title>
        <span className="title">NEVER NEWS</span>
      </Title>
      <Taps>
        <Option
          className={active ? "active" : "disabled"}
          to="/"
          onClick={activeHandle}
        >
          SEARCH
        </Option>
        <Option
          className={active ? "disabled" : "active"}
          to="/clips"
          onClick={disableHandel}
        >
          CLIPS
        </Option>
      </Taps>
    </HeaderStyle>
  );
}
