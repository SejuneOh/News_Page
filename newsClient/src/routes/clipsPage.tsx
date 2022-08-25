import { useEffect } from "react";
import styled from "styled-components";
import NewsCard from "../components/NewsCard";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { NewsModel } from "../models/newsModel";
import { getClips } from "../store/clipAction";

const ClipPageDiv = styled.div`
  position: relative;
  top: 140px;

  .noSearchPage {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      font-size: 25px;
    }
  }
`;

export default function ClipsPage() {
  // dispatch
  const dispatch = useAppDispatch();
  // clips
  const clips = useAppSelector((state) => state.clips.clipList);

  // 최초 실행
  useEffect(() => {
    dispatch(getClips());
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
        <div className="noSearchPage">
          <span>즐겨찾기 목록이 없습니다.</span>
        </div>
      )}
    </ClipPageDiv>
  );
}
