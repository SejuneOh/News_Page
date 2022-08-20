import { gql, QueryResult, useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { Container } from "../styles/newsListStyle";

const GET__NEWS = gql`
  query SearchNews($param: String!, $cnt: Int!) {
    searchNews(param: $param, cnt: $cnt) {
      lastBuildDate
      total
      start
      display
      items {
        title
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
      console.log("🚀 ~ file: NewsList.tsx ~ line 28 ~ NewsList ~ ret", ret);
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

  // 조건부 렌더링
  return (
    <Container>
      {data ? (
        <div>
          <span>{data.searchNews.display}</span>
          <span>{data.searchNews.total}</span>
          <ul>
            {data.searchNews.items.map((item: any) => (
              <li>{item.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>검색 내용이 없습니다.</div>
      )}
    </Container>
  );
}
