import './styles/global.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Progetto from "./pages/SideQuest";
import Academia from "./pages/Academia";
import Pubblicazioni from "./pages/Pubblicazioni";
import IlProgetto from "./pages/Project";
import SideQuest from "./pages/SideQuest";
import Creativita from "./pages/Creativita";
import Stalking from "./pages/Stalking";
import External from "./pages/External";


function App() {
  const location = useLocation();

  // Nascondi header e footer solo in homepage
  const showHeader = location.pathname !== "/";
  const showFooter = location.pathname !== "/";

  return (
    <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

      {showHeader && <Header />}

      <main className="main-content" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progetto" element={<Progetto />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/academia/publications" element={<Pubblicazioni />} />
          <Route path="/academia/mainQuest" element={<IlProgetto />} />
          <Route path="/academia/sideQuest" element={<SideQuest />} />
          <Route path="/art" element={<Creativita />} />
          <Route path="/about" element={<Stalking />} />
          <Route path="/external" element={<External />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
