import { useEffect } from "react";
import styled from "styled-components";
import NewsCard from "../components/newsCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { NewsModel } from "../models/newsModel";
import { getClips } from "../store/clipAction";

const ClipPageDiv = styled.div`
  border: 3px solid blue;
  position: relative;
  top: 140px;
`;

export default function ClipsPage() {
  // dispatch
  const dispatch = useAppDispatch();
  // clips
  const clips = useAppSelector((state) => state.clips.clipList);

  // 최초 실행
  useEffect(() => {
    dispatch(getClips());
    console.log(
      "🚀 ~ file: clipsPage.tsx ~ line 19 ~ ClipsPage ~ clips",
      clips
    );
  }, []);

  return (
    <ClipPageDiv>
      {clips.length ? (
        <div>
          <ul>
            {clips.map((item: NewsModel, idx: number) => {
              return <NewsCard key={idx} newsItem={item}></NewsCard>;
            })}
          </ul>
        </div>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </ClipPageDiv>
  );
}
