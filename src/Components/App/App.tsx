import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";
import AboutPage from "../Pages/About/About";

import LoginPage from "../Pages/Login/Login";
import RegisterPage from "../Pages/Register/Register";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={"/"} element={<LoginPage />} />
          <Route path={"/cadastro"} element={<RegisterPage />} />
          <Route path={"/sobre"} element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
