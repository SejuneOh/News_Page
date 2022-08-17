import { ApolloServer, gql } from "apollo-server";
import axios from "axios";
import dotenv from "dotenv";

//  dot.env 설정
dotenv.config({ path: "./.env" });

const typeDefs = gql`
  type News {
    title: String
    originallink: String
    link: String
    description: String
    pubDate: String
  }

  type NewsList {
    lastBuildDate: String
    total: Int
    start: Int
    display: Int
    items: [News]!
  }

  type Query {
    searchNews(param: String!, cnt: Int!): NewsList!
  }
`;

const resolvers = {
  Query: {
    searchNews(_: any, { param = "", cnt = 0 }) {
      const url = "https://openapi.naver.com/v1/search/news.json";

      const option: any = {
        headers: {
          "X-Naver-Client-Id": process.env.CLIENT_ID,
          "X-Naver-Client-Secret": process.env.CLIENT_SCRETE,
        },
        params: {
          query: param,
          display: cnt,
          sort: "date",
        },
      };

      return axios.get(url, option).then((res) => {
        return res.data;
      });
    },
  },
};

// 서버객체
const server = new ApolloServer({ typeDefs, resolvers });

// 서버 실행
server.listen().then(({ url }) => {
  console.log(`Running Server ${url}`);
});
