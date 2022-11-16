import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";
import LoginPage from "../Pages/Login/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
