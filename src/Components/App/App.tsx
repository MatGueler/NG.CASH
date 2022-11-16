import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={"/"} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
