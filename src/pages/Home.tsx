import Balloon from "../components/Balloon";

export default function Home() {
  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
      {/* Balloon da sinistra */}
      <Balloon side="left" style={{ fontSize: "24px", maxWidth: "600px" }}>
        Messaggio 1
      </Balloon>

      {/* Balloon di risposta da destra */}
      <Balloon side="right" style={{ fontSize: "24px", maxWidth: "600px" }}>
        Messaggio 2
      </Balloon>
    </div>
  );
}
