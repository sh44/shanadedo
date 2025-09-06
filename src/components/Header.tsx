import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

  const languages = [
    { code: "en", img: enFlag, label: "English" },
    { code: "it", img: itFlag, label: "Italiano" },
    { code: "fr", img: frFlag, label: "Français" },
    { code: "sp", img: spFlag, label: "Español" },
    { code: "ch", img: chFlag, label: "中文" },
  ];

  const [currentLang, setCurrentLang] = useState("en");

  const changeLanguage = (code: string, img: string) => {
    i18n.changeLanguage(code);
    setCurrentLang(code);
  };

  const navItemStyle = (key: string) => ({
    color: hoveredNav === key ? "#fb7185" : "#ffffff",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: 16,
  } as React.CSSProperties);

  return (
    <header style={{ width: "100%", background: "#111827", color: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link to="/" style={{ display: "inline-flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40, objectFit: "contain", display: "block" }} />
        </Link>

        {/* Nav */}
        <nav>
          <ul style={{ display: "flex", gap: 32, alignItems: "center", margin: 0, padding: 0, listStyle: "none" }}>

            <li>
              <Link
                to="/progetto"
                style={navItemStyle("progetto")}
                onMouseEnter={() => setHoveredNav("progetto")}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {t("nav.progetto")}
              </Link>
            </li>

            {/* Academia */}
            <li
              style={{ position: "relative" }}
              onMouseEnter={() => { clearTimeout(academyTimeout.current); setAcademyOpen(true); setHoveredNav("academia"); }}
              onMouseLeave={() => { academyTimeout.current = setTimeout(() => { setAcademyOpen(false); setHoveredNav(null); }, 300); }}
            >
              <Link to="/academia" style={navItemStyle("academia")}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {t("nav.accademia")}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 9l6 6 6-6" stroke={hoveredNav === "academia" ? "#fb7185" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

              {/* dropdown */}
              <div style={{
                display: academyOpen ? "block" : "none",
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                background: "#1f2937",
                borderRadius: 6,
                boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                minWidth: 160,
                zIndex: 60,
                transition: "all 0.2s ease",
              }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 6 }}>
                  <li>
                    <Link
                      to="/academia/pubblicazioni"
                      style={{ display: "block", padding: "8px 12px", color: "#fff", textDecoration: "none" }}
                      onClick={() => setAcademyOpen(false)}
                      onMouseEnter={e => (e.currentTarget.style.background = "#374151")}
                      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                      {t("nav.pubblicazioni")}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/creativita"
                style={navItemStyle("creativita")}
                onMouseEnter={() => setHoveredNav("creativita")}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {t("nav.creativita")}
              </Link>
            </li>

            <li>
              <Link
                to="/stalking"
                style={navItemStyle("stalking")}
                onMouseEnter={() => setHoveredNav("stalking")}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {t("nav.stalking")}
              </Link>
            </li>

            {/* Lingua */}
            <li
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

              <div style={{
                display: langOpen ? "block" : "none",
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: "#1f2937",
                borderRadius: 6,
                boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
                minWidth: 120,
                zIndex: 60,
                transition: "all 0.2s ease",
              }}>
                <ul style={{ listStyle: "none", margin: 0, padding: 6 }}>
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => changeLanguage(lang.code, lang.img)}
                        style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "8px 10px", background: "transparent", border: "none", cursor: "pointer" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#374151")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        aria-label={`Scegli la lingua ${lang.label}`}
                      >
                        <img src={lang.img} alt={lang.code} style={{ width: 23, height: 18, objectFit: "contain" }} />
                        <span style={{ color: "#fff", fontSize: 14 }}>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
