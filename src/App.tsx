import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Progetto from "./pages/Progetto";
import Academia from "./pages/Academia";
import Pubblicazioni from "./pages/Pubblicazioni";
import Creativita from "./pages/Creativita";
import Stalking from "./pages/Stalking";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progetto" element={<Progetto />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/academia/pubblicazioni" element={<Pubblicazioni />} />
          <Route path="/creativita" element={<Creativita />} />
          <Route path="/stalking" element={<Stalking />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
