import Balloon from "../components/Balloon";
import ChoicePanel from "../components/ChoicePanel";
import WalkingChicken from "../components/WalkingChicken"
import { useTranslation } from "react-i18next";
import grassBackground from "../assets/grass.png";

export default function Home() {
  const { t } = useTranslation();

  const mainChoices = [
    { key: t("homepage.options.accademia"), to: "/academia" },
    { key: t("homepage.options.creativita"), to: "/creativita" },
    { key: t("homepage.options.stalking"), to: "/stalking" },
  ];

  const extraChoice = { key: t("pages.altreCose"), to: "/external" };

  return (
    
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        backgroundImage: `url(${grassBackground})`,
        backgroundSize: "cover",        // per riempire lo schermo
        backgroundPosition: "center",   // centrato
        backgroundRepeat: "no-repeat",  // niente ripetizione
        minHeight: "100vh",             // copre tutta la finestra
      }}
      >
      <Balloon side="left" style={{ fontSize: "24px", maxWidth: "600px" }}>
        {t("homepage.question")}
      </Balloon>

      <Balloon side="right" style={{ fontSize: "24px", maxWidth: "600px" }}>
        {t("homepage.think")}
      </Balloon>
      <WalkingChicken speed={12} top="45%" />

      <ChoicePanel choices={mainChoices} extra={extraChoice} />
    </div>
  );
}
