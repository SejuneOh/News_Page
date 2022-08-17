import { Route, Routes } from "react-router-dom";
import SearchPage from "./routes/SearchPage";
import ClipsPage from "./routes/ClipsPage";
import Header from "./componets/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<SearchPage />}></Route> */}
        {/* <Route path="/clips" element={<ClipsPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
