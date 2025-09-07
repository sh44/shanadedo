import './styles/global.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Progetto from "./pages/Progetto";
import Academia from "./pages/Academia";
import Pubblicazioni from "./pages/Pubblicazioni";
import Creativita from "./pages/Creativita";
import Stalking from "./pages/Stalking";

function App() {
  const location = useLocation();

  // Nascondi footer solo in homepage
  const showFooter = location.pathname !== "/";

  return (
    <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <main className="main-content" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progetto" element={<Progetto />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/academia/pubblicazioni" element={<Pubblicazioni />} />
          <Route path="/creativita" element={<Creativita />} />
          <Route path="/stalking" element={<Stalking />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

export default App;
