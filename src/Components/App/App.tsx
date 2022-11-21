import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";

import AboutPage from "../../Pages/About/About";
import MenuPage from "../../Pages/Home/Menu";
import LoginPage from "../../Pages/Login/Login";
import RegisterPage from "../../Pages/Register/Register";
import TransactionsPage from "../../Pages/Transaction/Transaction";

import { HideInformationProvider } from "../../Contexts/HideInformation";
import { UserProvider } from "../../Contexts/UserContext";
import HistoryPage from "../../Pages/History/History";
import { LoadingProvider } from "../../Contexts/LoadingContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <HideInformationProvider>
        <UserProvider>
          <LoadingProvider>
            <Router>
              <Routes>
                <Route path={"/"} element={<LoginPage />} />
                <Route path={"/cadastro"} element={<RegisterPage />} />
                <Route path={"/menu"} element={<MenuPage />} />
                <Route path={"/transacoes"} element={<HistoryPage />} />
                <Route
                  path={"/transacoes/nova"}
                  element={<TransactionsPage />}
                />
                <Route path={"/sobre"} element={<AboutPage />} />
              </Routes>
            </Router>
          </LoadingProvider>
        </UserProvider>
      </HideInformationProvider>
    </>
  );
}

export default App;
