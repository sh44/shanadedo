import React from "react";
import Balloon from "../components/Balloon";
import ContentBlock, { ContentBlockProps } from "../components/ContentBlock/ContentBlock";
import { useTranslation } from "react-i18next";

export default function Academia() {
  const { t } = useTranslation();

  const academiaData: ContentBlockProps = {
    variant: 7,
    childrenBlocks: [
      {
        variant: 9, // Baloon
        body: t("academia.title"),
      },
      {
        variant: 0, // Intro
        body: (
          <>
            {t("academia.introduction1")}
            <a
              href="https://www.irenezanardi.com/tadaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="textLink"
            >
              {t("academia.project")}
            </a>
            {t("academia.introduction2")}
          </>
        ),
      },
      {
        variant: 7, // Posizioni accademiche
        childrenBlocks: [
          {
            variant: 3,
            subtitleLeft: t("academia.positions.assistantProfessor"),
            subtitleRight: "2021–Presente",
            body: t("academia.positions.assistantProfessorDescription"),
          },
          {
            variant: 3,
            subtitleLeft: t("academia.positions.postdoc"),
            subtitleRight: "2019–2021",
            body: t("academia.positions.postdocDescription"),
          },
        ],
        title: <Balloon>{t("academia.sections.positions")}</Balloon>,
      },
      {
        variant: 7, // Conferenze
        childrenBlocks: [
          {
            variant: 3,
            subtitleLeft: t("academia.conferences.icml2023"),
            subtitleRight: "2023",
            body: t("academia.conferences.icml2023Description"),
          },
          {
            variant: 3,
            subtitleLeft: t("academia.conferences.neurips2022"),
            subtitleRight: "2022",
            body: t("academia.conferences.neurips2022Description"),
          },
        ],
        title: <Balloon>{t("academia.sections.conferences")}</Balloon>,
      },
      {
        variant: 7, // Attività di revisione
        childrenBlocks: [
          {
            variant: 3,
            subtitleLeft: t("academia.reviewing.neurips"),
            subtitleRight: "2022–2023",
            body: t("academia.reviewing.neuripsDescription"),
          },
          {
            variant: 3,
            subtitleLeft: t("academia.reviewing.icml"),
            subtitleRight: "2021–2022",
            body: t("academia.reviewing.icmlDescription"),
          },
        ],
        title: <Balloon>{t("academia.sections.reviewing")}</Balloon>,
      },
      {
        variant: 7, // TA e insegnamento
        childrenBlocks: [
          {
            variant: 3,
            subtitleLeft: t("academia.teaching.machineLearning"),
            subtitleRight: "2022",
            body: t("academia.teaching.machineLearningDescription"),
          },
          {
            variant: 3,
            subtitleLeft: t("academia.teaching.ai"),
            subtitleRight: "2021",
            body: t("academia.teaching.aiDescription"),
          },
        ],
        title: <Balloon>{t("academia.sections.teaching")}</Balloon>,
      },
      {
        variant: 7, // Studenti supervisionati
        childrenBlocks: [
          {
            variant: 3,
            subtitleLeft: t("academia.supervision.studentA"),
            subtitleRight: "2023–Presente",
            body: t("academia.supervision.studentADescription"),
          },
          {
            variant: 3,
            subtitleLeft: t("academia.supervision.studentB"),
            subtitleRight: "2022–2023",
            body: t("academia.supervision.studentBDescription"),
          },
        ],
        title: <Balloon>{t("academia.sections.supervision")}</Balloon>,
      },
    ],
  };

  return (
    <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "0rem" }}>
      <Balloon side="left" style={{ fontFamily: '"Courier Prime", monospace' }}>
      {t("academia.title")}
        </Balloon>

        <ContentBlock {...academiaData}
      />
    </div>
  );
}
