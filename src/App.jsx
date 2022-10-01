import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import GlobalStyle from './assets/styles/global'
import CtxApp from "./context/Ctx";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <CtxApp>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      </CtxApp>
    </>
  );
}

export default App;
