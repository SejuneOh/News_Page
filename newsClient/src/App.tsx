import { Route, Routes } from "react-router-dom";
import SearchPage from "./routes/SearchPage";
import ClipsPage from "./routes/ClipsPage";
import Header from "./components/Header";
import styled from "styled-components";

// 프로그램 실행 시, 로컬 스토리지 생성하기
(() => {
  if (window.localStorage.getItem("historys") === null)
    localStorage.setItem("historys", JSON.stringify([]));
  if (window.localStorage.getItem("clips") === null)
    localStorage.setItem("clips", JSON.stringify([]));
})();

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />}></Route>
        {/* <Route path="/clips" element={<ClipsPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
