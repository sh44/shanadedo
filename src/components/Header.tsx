import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./LoStile.css";

import logo from "../assets/home.png";
import enFlag from "../assets/en.png";
import itFlag from "../assets/it.png";
import frFlag from "../assets/fr.png";
import spFlag from "../assets/sp.png";
import chFlag from "../assets/ch.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [academyOpen, setAcademyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const academyTimeout = useRef(null);
  const langTimeout = useRef(null);
  const [currentLang, setCurrentLang] = useState("en");

  const languages = [
    { code: "en", img: enFlag, label: "English" },
    { code: "it", img: itFlag, label: "Italiano" },
    { code: "fr", img: frFlag, label: "Français" },
    { code: "sp", img: spFlag, label: "Español" },
    { code: "ch", img: chFlag, label: "中文" },
  ];

  const mainNav = [
    { key: "academia", label: t("nav.accademia"), path: "/academia" },
    { key: "creativita", label: t("nav.creativita"), path: "/art" },
    { key: "stalking", label: t("nav.stalking"), path: "/about" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setCurrentLang(code);
  };


  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO */}
        <Link to="/" className="header-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* NAV */}
        <nav className="nav">
          <ul className="nav-list">
            {mainNav.map((nav) => (
              <li
                key={nav.key}
                className="nav-item-wrapper"
                onMouseEnter={() => {
                  if (nav.key === "academia") {
                    clearTimeout(academyTimeout.current);
                    setAcademyOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (nav.key === "academia") {
                    academyTimeout.current = setTimeout(
                      () => setAcademyOpen(false),
                      300
                    );
                  }
                }}
              >
                <Link to={nav.path} className="nav-item">
                  {nav.label}
                </Link>

                {/* DROPDOWN ACADEMIA */}
                {nav.key === "academia" && academyOpen && (
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/academia/main_quest" className="dropdown-item">{t("nav.mainQuest")}</Link>
                      </li>
                      <li>
                        <Link to="/academia/side_quest" className="dropdown-item">{t("nav.sideQuest")}</Link>
                      </li>
                      <li>
                        <Link to="/academia/publications" className="dropdown-item">{t("nav.pubblicazioni")}</Link>
                      </li>
                    </ul>
                  </div>
                )}

              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* LINGUA fuori dal rettangolo */}
      <div
        className="lang-selector-outside"
        onMouseEnter={() => {
          clearTimeout(langTimeout.current);
          setLangOpen(true);
        }}
        onMouseLeave={() => {
          langTimeout.current = setTimeout(() => setLangOpen(false), 300);
        }}
      >
        <div className="lang-trigger" aria-haspopup="true" aria-expanded={langOpen}>
          <img
            src={languages.find((l) => l.code === currentLang)?.img}
            alt={currentLang}
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {langOpen && (
          /* Riusa la stessa classe .dropdown usata per il nav; posizioniamo con right:0 top:100% */
          <div className="dropdown dropdown-lang">
            <ul>
              {languages.map((lang) => (
                <li key={lang.code}>
                  {/* riusiamo .dropdown-item: solo immagine, nessun testo */}
                  <button
                    className="dropdown-item dropdown-flag"
                    onClick={() => changeLanguage(lang.code)}
                    aria-label={lang.label}
                  >
                    <img src={lang.img} alt={lang.code} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}


{/* import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./LoStile.css";

import logo from "../assets/home.png";
import enFlag from "../assets/en.png";
import itFlag from "../assets/it.png";
import frFlag from "../assets/fr.png";
import spFlag from "../assets/sp.png";
import chFlag from "../assets/ch.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [academyOpen, setAcademyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const academyTimeout = useRef(null);
  const langTimeout = useRef(null);
  const [currentLang, setCurrentLang] = useState("en");

  const languages = [
    { code: "en", img: enFlag, label: "English" },
    { code: "it", img: itFlag, label: "Italiano" },
    { code: "fr", img: frFlag, label: "Français" },
    { code: "sp", img: spFlag, label: "Español" },
    { code: "ch", img: chFlag, label: "中文" },
  ];

  const mainNav = [
    { key: "academia", label: t("nav.accademia"), path: "/academia" },
    { key: "creativita", label: t("nav.creativita"), path: "/creativita" },
    { key: "stalking", label: t("nav.stalking"), path: "/stalking" },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setCurrentLang(code);
  };


  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO *
        <Link to="/" className="header-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* NAV *
        <nav className="nav">
          <ul className="nav-list">
            {mainNav.map((nav) => (
              <li
                key={nav.key}
                className="nav-item-wrapper"
                onMouseEnter={() => {
                  if (nav.key === "academia") {
                    clearTimeout(academyTimeout.current);
                    setAcademyOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (nav.key === "academia") {
                    academyTimeout.current = setTimeout(
                      () => setAcademyOpen(false),
                      300
                    );
                  }
                }}
              >
                <Link to={nav.path} className="nav-item">
                  {nav.label}
                </Link>

                {/* DROPDOWN ACADEMIA *
                {nav.key === "academia" && academyOpen && (
                  <div className="dropdown">
                    <ul>
                      <li>
                        <Link to="/academia/pubblicazioni">{t("nav.pubblicazioni")}</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* LINGUA fuori dal rettangolo *
      <div
        className="lang-selector-outside"
        onMouseEnter={() => {
          clearTimeout(langTimeout.current);
          setLangOpen(true);
        }}
        onMouseLeave={() => {
          langTimeout.current = setTimeout(() => setLangOpen(false), 300);
        }}
      >
        <div className="lang-trigger">
          <img
            src={languages.find((l) => l.code === currentLang)?.img}
            alt={currentLang}
          />
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {langOpen && (
          <div className="dropdown dropdown-lang">
            <ul>
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button onClick={() => changeLanguage(lang.code)}>
                    <img src={lang.img} alt={lang.code} />
                    <span>{lang.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}




############################################### v1:

{/*
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LoStile.css"; // importa lo stile esterno

import logo from "../assets/logo.png";
import enFlag from "../assets/en.png";
import itFlag from "../assets/it.png";
import frFlag from "../assets/fr.png";
import spFlag from "../assets/sp.png";
import chFlag from "../assets/ch.png";

export default function Header() {
const { t, i18n } = useTranslation();
const [academyOpen, setAcademyOpen] = useState(false);
const [langOpen, setLangOpen] = useState(false);
const [hoveredNav, setHoveredNav] = useState<string | null>(null);
const academyTimeout = useRef<NodeJS.Timeout>();
const langTimeout = useRef<NodeJS.Timeout>();
const [currentLang, setCurrentLang] = useState("en");

const languages = [
{ code: "en", img: enFlag, label: "English" },
{ code: "it", img: itFlag, label: "Italiano" },
{ code: "fr", img: frFlag, label: "Français" },
{ code: "sp", img: spFlag, label: "Español" },
{ code: "ch", img: chFlag, label: "中文" },
];

const mainNav = [
{ key: "academia", label: t("nav.accademia"), path: "/academia" },
{ key: "creativita", label: t("nav.creativita"), path: "/creativita" },
{ key: "stalking", label: t("nav.stalking"), path: "/stalking" },
];

const changeLanguage = (code: string) => {
i18n.changeLanguage(code);
setCurrentLang(code);
};

return (
  <header className="header">
    <div className="header-container">
      {/* Logo *
      <Link to="/" className="header-logo"> <img src={logo} alt="Logo" /> </Link>

    {/* Nav *
    <nav style={{ display: "flex", alignItems: "center", gap: 32, position: "relative" }}>
      <ul className="nav-list">
        {mainNav.map((nav) => (
          <li key={nav.key} style={{ position: nav.key === "academia" ? "relative" : "static" }}
              onMouseEnter={() => nav.key === "academia" && (clearTimeout(academyTimeout.current), setAcademyOpen(true), setHoveredNav("academia"))}
              onMouseLeave={() => nav.key === "academia" && (academyTimeout.current = setTimeout(() => setAcademyOpen(false), 300), setHoveredNav(null))}>
            <Link to={nav.path} className="nav-item"
                  onMouseEnter={() => setHoveredNav(nav.key)}
                  onMouseLeave={() => setHoveredNav(null)}>
              {nav.label}
            </Link>

            {/* Dropdown per accademia *
            {nav.key === "academia" && academyOpen && (
              <div className="dropdown" style={{ left: 0 }}>
                <ul>
                  <li>
                    <Link to="/academia/pubblicazioni" className="nav-item" style={{ display: "block", padding: "8px 12px", textDecoration: "none" }}
                          onMouseEnter={e => e.currentTarget.style.background = "#374151"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      {t("nav.pubblicazioni")}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Lingua *
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => { clearTimeout(langTimeout.current); setLangOpen(true); }}
        onMouseLeave={() => { langTimeout.current = setTimeout(() => setLangOpen(false), 300); }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
          <img src={languages.find(l => l.code === currentLang)?.img} alt={currentLang} style={{ width: 23, height: 18, objectFit: "contain" }} />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {langOpen && (
          <div className="dropdown" style={{ right: 0 }}>
            <ul>
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button onClick={() => changeLanguage(lang.code)}>
                    <img src={lang.img} alt={lang.code} style={{ width: 23, height: 18, objectFit: "contain" }} />
                    <span>{lang.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  </div>
</header>

);
}
*/}
