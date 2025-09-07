import Balloon from "../components/Balloon";
import ChoicePanel from "../components/ChoicePanel";
import WalkingChicken from "../components/WalkingChicken"
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const mainChoices = [
    { key: t("homepage.options.progetto"), to: "/progetto" },
    { key: t("homepage.options.accademia"), to: "/academia" },
    { key: t("homepage.options.creativita"), to: "/creativita" },
    { key: t("homepage.options.stalking"), to: "/stalking" },
  ];

  const extraChoice = { key: t("pages.altreCose"), to: "/altre-cose" };

  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
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
