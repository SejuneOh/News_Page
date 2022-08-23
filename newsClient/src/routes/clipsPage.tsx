import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";

const ClipPageDiv = styled.div`
  border: 3px solid blue;
  /* height: 100vh; */
  position: relative;
  top: 140px;
`;

export default function ClipsPage() {
  // dispatch
  const dispatch = useAppDispatch();

  // clips
  const clips = useAppSelector((state) => state.clips.clipList);
  console.log("🚀 ~ file: clipsPage.tsx ~ line 17 ~ ClipsPage ~ clips", clips);

  return (
    <ClipPageDiv>
      {clips.length ? <div>true</div> : <div>검색 결과가 없습니다.</div>}
    </ClipPageDiv>
  );
}
