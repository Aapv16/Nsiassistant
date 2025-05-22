import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style/landingPage.css";
import "./style/mediaQuery.css";
import Home from "./pages/Home";
import Pivaspage from "./pages/Pivaspage";
import NotFoundPage from "./pages/NotFoundPage";
import PressureInjury from "./pages/PressureInjury";
import VidioPage from "./pages/VidioPage";
import TentangPage from "./pages/TentangPage";
import AdvicePage from "./pages/AdvicePage";
import AdvicePage2 from "./pages/AdvicePage2";
import AdvicePage3 from "./pages/AdvicePage3";
import AdvicePage4 from "./pages/AdvicePage4";
import AdvicePage5 from "./pages/AdvicePage5";
import Unstageable from "./pages/Unstageable";
import Suspect from "./pages/Suspect";
import PivasScore from "./pages/PivasScore";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pivas" element={<Pivaspage />}></Route>
          <Route path="/pressure" element={<PressureInjury />}></Route>
          <Route path="/vidio" element={<VidioPage />}></Route>
          <Route path="/tentang" element={<TentangPage />}></Route>
          <Route path="/advice" element={<AdvicePage />}></Route>
          <Route path="/advice2" element={<AdvicePage2 />}></Route>
          <Route path="/advice3" element={<AdvicePage3 />}></Route>
          <Route path="/advice4" element={<AdvicePage4 />}></Route>
          <Route path="/advice5" element={<AdvicePage5 />}></Route>
          <Route path="/unstageable" element={<Unstageable />}></Route>
          <Route path="/suspect" element={<Suspect />}></Route>
          <Route path="/scorepivas" element={<PivasScore />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
