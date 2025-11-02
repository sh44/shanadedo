import React from "react";
import KeyboardChicken from "../components/KeyboardChicken";
import stars from "../assets/moons.png";

export default function Creativita() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${stars})`, // aggiungi lo sfondo
        backgroundSize: "cover",          // fa coprire tutto il div
        backgroundRepeat: "no-repeat",    // evita ripetizioni
        backgroundPosition: "center",     // centra l'immagine
        minHeight: "100vh",               // almeno tutta l'altezza della pagina
      }}
    >


      <main style={{ padding: "2rem", flex: 1 }}>
        <h1 style={{ fontSize: "2rem", color: "#ef4444" }}>
          Benvenuto in Creatività
        </h1>

        <KeyboardChicken triggerWord="ciao" message="Ciao a te!" duration={5000} />
        <KeyboardChicken triggerWord="hey" message="Hellooo" duration={5000} />
      </main>
    </div>
  );
}
