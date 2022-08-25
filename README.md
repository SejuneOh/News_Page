# News-Page App (Team4)

<img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/JS-yellow?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"><img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"><img src="https://img.shields.io/badge/CRA-09D3AC?style=for-the-badge&logo=Create React App&logoColor=white"><img src="https://img.shields.io/badge/TYPESCRIPT-09D3AE?style=for-the-badge&logo=Typescript&logoColor=white">

## 기획목표
- **Naver Open API를 이용한 실시간 반응형 Web Page 만들기**


## Stack

- Client
  - Vite(vite-ts)
  - Git, Github
  - Styled-Components
  - Redux-toolkit
  - apollo-client, graphql
  - React-Router-Dom
  - localStorage


- Server
  - Apollo-Server
  - DotEnv


- Common
  - typescript
  - graphql
  - axios
---
### 사용 URL
- https://openapi.naver.com/v1/search/news.json

_참조: https://developers.naver.com/docs/common/openapiguide/_

---

## 요구사항

- Routing
  - "/" url에서는 기사 검색 페이지 렌더
  - "/clip" url에서는 내가 clip한 기사 페이지 렌더
  -  그 외 url은 "/"로 redirect

- Input
  - 마지막 타이핑 이후 1초동안 추가 입력이 없으며, input value가 있는 경우 검색 api 호출 
  - 최대 5개까지 search history 저장 (브라우저 종료해도 지속)
  - search history가 존재하고, input에 focus중이면 searchhistory 노출

- News list
  - "/" 과 "/clip"은 기사 리스트를 렌더한다
  - 기사 리스트는 다음 내용을 포함하는 기사 카드를 렌더한다
  - 타이틀 날짜, clip하기 버튼(누를 때마다 unclip하기 버튼과 toggle 자세히보기 버튼(해당 기사 새탭으로 열기)

- Clip
  - 기사 카드의 clip버튼을 클릭하여 해당 기사를 즐겨찾기한다
  - clip된 기사들은 "/clip"에서 확인할 수 있다
  - clip된 기사들은 브라우저를 재시작하여도 유지된다
  - 기사를 unclip하면 더이상 "/clip"에서 확인할 수 없다

- Etc
  - create-react-app 사용
  - react-router-dom 사용
  - redux 사용



--- 

### Project Team 규칙

- Commit Messag 규칙 준수(feat, fix, docs...)
- 하루의 할 일 Issue 등록 후 작업 진행
- EsLint, Prettier 사용하기
- 기능 위에 주석으로 작성자, 함수 기능 설명 작성
- 함수 앞 func 키워드 사용

### 구현 기능

#### Graph ql을 이용한 Restful API Wrapping 구현
- 기존 Resful API를 Wrapping 하여 필요 데이터를 바인딩 
- DotEnv lib을 사용하여, 개인 토큰은 process를 통하여 사용
- API를 전달 받은 데이터의 iso-8859-1 기호 Replace

```ts
const resolvers = {
  Query: {
    searchNews(_: any, { param = "", cnt = 0 }) {
      const url = "https://openapi.naver.com/v1/search/news.json";

      const option: any = {
        headers: {
          "X-Naver-Client-Id": process.env.CLIENT_ID,
          "X-Naver-Client-Secret": process.env.CLIENT_SCRETE,
          charset: "utf-8",
          responseEncodig: "utf-8",
        },
        params: {
          query: param,
          display: cnt,
          sort: "date",
        },
      };

      return axios.get(url, option).then((res) => {
        // 특수문자 관련 삭제
        if (res.status === 200) {
          const newsItems = res.data.items;
          const filterData = newsItems.map((item: News) => {
            item.title = item.title.replace(
              /(<([^>]+)>)|&quot|&apos;|&lt;|&gt;/gi,
              ""
            );
            item.description = item.description.replace(
              /(<([^>]+)>)|&quot|&apos;/gi,
              ""
            );
            item.link = item.link.replace(
              /(<([^>]+)>)|&quot|&apos;|&lt;|&gt;/gi,
              ""
            );
            item.originallink = item.originallink.replace(
              /(<([^>]+)>)|&quot|&apos;/gi,
              ""
            );
            item.pubDate = item.pubDate.replace(
              /(<([^>]+)>)|&quot|&apos;/gi,
              ""
            );

            return item;
          });

          res.data.items = filterData;
          return res.data;
        }
      });
    },
  },
};
```

#### 검색어 입력 후 1초뒤 검색 내용 출력

<img width="1432" alt="screen_capture 2022-08-25 PM 3 51 03" src="https://user-images.githubusercontent.com/103201530/186595276-7be08d87-6f8c-441a-a526-94de8422c355.png">

#### 검색어는 출력과 동시에 로컬스토리지에 등록 후 검색 리스트 출력 및 삭제기능


<img width="1432" alt="screen_capture 2022-08-25 PM 3 52 42" src="https://user-images.githubusercontent.com/103201530/186595593-e7a1ea59-d620-4856-8dbe-4d0cd9cdf36f.png">


#### 클립기능
- 클립한 내용은 로컬스토리지에 저장 및 클립페이지에 표시 
- 해당 내용은 브라우저가 닫혀도 사용자의 클립내용을 표시함
- 뉴스 검새 리스트에도 클립 기사 표시

<img width="1432" alt="screen_capture 2022-08-25 PM 3 54 47" src="https://user-images.githubusercontent.com/103201530/186596022-ae9e86d8-7b37-44a4-a3cf-1833df38925c.png">

#### Routing
- 필요 url 제외하고는 / 페이지로 이동하도록 구현

```js
<Routes>
  <Route path="/" element={<SearchPage />}></Route>
  <Route path="/clips" element={<ClipsPage />}></Route>
  <Route path="*" element={<Navigate to="/" replace={true} />} />
</Routes>
```
