import { gql, useLazyQuery } from "@apollo/client";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { NewsModel } from "../models/newsModel";
import { Container, DefaultDiv } from "../styles/newsListStyle";
import NewsCard from "./newsCard";

const GET__NEWS = gql`
  query SearchNews($param: String!, $cnt: Int!) {
    searchNews(param: $param, cnt: $cnt) {
      lastBuildDate
      total
      start
      display
      items {
        title
        link
        description
        pubDate
      }
    }
  }
`;

export default function NewsList() {
  const term: string = useAppSelector((state) => state.term.term);

  //  특정 조건이 생길 때 해당 쿼리를 실행한다.
  const [fetchTerm, { data, loading, error }] = useLazyQuery(GET__NEWS, {
    variables: {
      param: term,
      cnt: 20,
    },
    onCompleted: (ret) => {
      // console.log("🚀 ~ file: NewsList.tsx ~ line 28 ~ NewsList ~ ret", ret);
    },
  });

  // term의 기준으로  gql을 실행 시킬 수 있게 조건을 변경한다.
  useEffect(() => {
    if (!term) return;
    fetchTerm();
  }, [term]);

  if (loading) {
    <h1>Loading</h1>;
  }

  if (error) {
    <h1>Error</h1>;
  }

  // test
  const tmpData: NewsModel = {
    title: "타이틀",
    originallink: "https://naver.com",
    link: "https://naver.com",
    description: "설명",
    pubDate: "Sat, 20 Aug 2022 18:44:00 +0900",
  };

  // 조건부 렌더링
  return (
    <Container>
      <NewsCard newsItem={tmpData}></NewsCard>

      {/* {data ? (
        <div>
          <span>{data.searchNews.display}</span>
          <span>{data.searchNews.total}</span>
          <ul>
            {data.searchNews.items.map((item: any, idx: number) => (
              <li key={idx}>{item.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <DefaultDiv>
          <span className="alert">검색 내용이 없습니다.</span>
        </DefaultDiv>
      )} */}
    </Container>
  );
}
