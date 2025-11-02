import React from "react";
import { Link } from "react-router-dom";
import "./LoStile.css"; // importa lo stile esterno

interface Choice {
  key: string; // chiave i18n o testo da mostrare
  to: string;  // percorso React Router
}

interface ChoicePanelProps {
  choices: Choice[]; // prime 3 opzioni in verticale
  extra?: Choice;    // link testuale sotto
}

export default function ChoicePanel({ choices, extra }: ChoicePanelProps) {
  return ( <div className="choice-panel"> <div className="choice-buttons">
    {choices.map((choice) => ( <Link key={choice.key} to={choice.to} className="choice-button">
      {choice.key} </Link>
      ))} </div>


  {extra && (
    <Link to={extra.to} className="choice-extra">
      {extra.key}
    </Link>
  )}
</div>

);
}




{/*import React from "react";
import { Link } from "react-router-dom";

interface Choice {
  key: string; // chiave i18n o testo da mostrare
  to: string;  // percorso React Router
}

interface ChoicePanelProps {
  choices: Choice[]; // prima 4 opzioni in griglia
  extra?: Choice;    // quinta opzione sotto
}

export default function ChoicePanel({ choices, extra }: ChoicePanelProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%", // ora occupa tutta la larghezza
        background: "rgba(0,0,0,0.5)",//"rgba(123, 179, 105, 0.45)", // grigio scuro semitrasparente
        padding: "2.5rem 2rem 3rem 2rem", // più alto
        zIndex: 100,
        textAlign: "center",
      }}
    >
      {/* Griglia 2x2 *
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          marginBottom: extra ? "16px" : 0,
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {choices.map((choice) => (
          <Link
            key={choice.key}
            to={choice.to}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "24px 20px",
              background: "#fff",
              color: "#111827",
              borderRadius: "0px",
              textDecoration: "none",
              fontFamily: '"Courier Prime", monospace',
              fontSize: "30px",
              fontWeight: 500,
              transition: "all 0.15s ease", // animazione morbida
              boxShadow: "0 4px 0 rgba(0,0,0,0.2)", // effetto rilievo
              transform: "translateY(0px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e5e7eb"; // shade più chiaro
              e.currentTarget.style.transform = "translateY(4px)"; // abbassa il bottone
              e.currentTarget.style.boxShadow = "0 2px 0 rgba(0,0,0,0.1)"; // ombra ridotta
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.2)";
            }}
          >
            {choice.key}
          </Link>
        ))}
      </div>


      {/* Quinta opzione sotto *
      {extra && (
        <Link
          to={extra.to}
          style={{
            display: "inline-block",
            marginTop: "12px",
            color: "#111827",
            fontFamily: '"Courier Prime", monospace',
            fontSize: "18px",
            //textDecoration: "underline",
            transition: "all 0.15s ease",
            transform: "translateY(0px)",
            textAlign: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#f3f4f6"; // colore più chiaro
            e.currentTarget.style.transform = "translateY(2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#111827";
            e.currentTarget.style.transform = "translateY(0px)";
          }}
        >
          {extra.key}
        </Link>
      )}
    </div>
  );
}*/}
