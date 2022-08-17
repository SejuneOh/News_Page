import { ApolloServer, gql } from "apollo-server";
import request from "request";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const url = "https://openapi.naver.com/v1/search/news.json";
const option = {
  query: "IT",
};

console.log("id", process.env.CLIENT_ID);
console.log("secret", process.env.CLIENT_SCRETE);

request.get(
  {
    uri: url,
    qs: option,
    headers: {
      "X-Naver-Client-Id": process.env.CLIENT_ID,
      "X-Naver-Client-Secret": process.env.CLIENT_SCRETE,
    },
  },
  (err, res, body) => {
    let json = JSON.parse(body);
    console.log("🚀 ~ file: server.ts ~ line 24 ~ body", body);
  }
);
