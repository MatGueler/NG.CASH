import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";

import AboutPage from "../Pages/About/About";
import MenuPage from "../Pages/Home/Menu";
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
          <Route path={"/menu"} element={<MenuPage />} />
          <Route path={"/sobre"} element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
