import { gql, useQuery } from "@apollo/client";

const GET__NEWS = gql`
  query getNewsList($param: String, $cnt: Int) {
    searchNews(param: $param, cnt: $cnt) {
      lastBuildDate
      total
      start
      display
      items {
        title
        originallink
        link
        description
        pubDate
      }
    }
  }
`;

export default {
  async getNewsData(param: string, cnt: number) {
    try {
      const { data, loading, error } = useQuery(GET__NEWS, {
        variables: {
          param: param,
          cnt: cnt,
        },
      });
    } catch (e) {
      console.log("🚀 ~ file: newsServcie.ts ~ line 42 ~ getNewsData ~ e", e);
    }
  },
};
