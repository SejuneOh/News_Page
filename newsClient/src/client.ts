import { ApolloClient, InMemoryCache } from "@apollo/client";

//  apollo를 사용해서 client  구현하기
// cache => 아폴로에서 데이터를 한번 로딩하면 리렌더링 되어도 데이터를 가지고있다(InMemoryCache)
// 특정 검색 데이터가 새롭게 들어와도 기존에 cache에 저장할 곳을 확인하여 자동으로 데이터를 저장한다.
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default client;
