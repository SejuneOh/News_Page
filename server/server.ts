import { ApolloServer, gql } from "apollo-server";

import dotenv from "dotenv";

//  dot.env 설정
dotenv.config({ path: "./.env" });

// const reqNews = async (param: string, cnt: number) => {
//   let result: any = "";
//   // uri
//   const url = "https://openapi.naver.com/v1/search/news.json";

//   // search option
//   const option = {
//     query: param,
//     display: cnt,
//     sort: "date",
//   };

//   // get Reqeust
//   await request.get(
//     {
//       uri: url,
//       qs: option,
//       headers: {
//         "X-Naver-Client-Id": process.env.CLIENT_ID,
//         "X-Naver-Client-Secret": process.env.CLIENT_SCRETE,
//       },
//     },
//     (err, res, body) => {
//       if (err) {
//         return "Bad Request";
//       }

//       let json = JSON.parse(body);
//       result = json;
//     }
//   );

//   return result;
// };

const typeDefs = gql`
  type News {
    title: String
    originallink: String
    link: String
    description: String
    pubDate: String
  }

  type Query {
    searchNews(param: String!, cnt: Int): [News]!
  }
`;

const resolvers = {
  Query: {
    searchNews(_: any, { param = "", cnt = 0 }) {},
  },
};

// 서버객체
const server = new ApolloServer({ typeDefs, resolvers });

// 서버 실행
server.listen().then(({ url }) => {
  console.log(`Running Server ${url}`);
});
