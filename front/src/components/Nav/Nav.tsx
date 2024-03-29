import React, { useState } from "react";
import "./Nav.css";
import { Flags } from "components/Flags/Flags";
import { HashLink } from "react-router-hash-link";

import { useTranslation } from "react-i18next";
import { SECTIONS } from "utils/constants";

export const Nav = ({
  navColor,
  sectionIntersected,
}: {
  navColor: boolean;
  sectionIntersected: string;
}) => {
  const [navOpen, setNavOpen] = useState(false);
  const languages = ["gb", "ar", "fr"];
  const { t, i18n } = useTranslation();
  /** Changes localization language and closes nav menu (in responsive mode) if open
   *
   * @param code string for the language user wants to change
   */
  function changeLanguage(code: string) {
    i18n.changeLanguage(code);
    setNavOpen(false);
  }

  return (
    <nav className={navColor ? "afterScroll" : undefined}>
      <div className="nav-center">
        <div className=" nav-header espaciar">
          <div className="logo">
            <HashLink to="#">
              <img id="logoRHL" src="/img/logo.png" alt="logoHome" />
            </HashLink>
          </div>

          <div className="nav-button" onClick={() => setNavOpen(!navOpen)}>
            <div className="burger-dash"></div>
          </div>
        </div>

        <ul className={`links ${navOpen && "active"}`}>
          <li>
            <HashLink
              to="#about"
              id="aboutHover"
              className={
                sectionIntersected === "about" ? "lineHover" : undefined
              }
              onClick={() => setNavOpen(false)}
            >
              {t("about")}
            </HashLink>
          </li>

          <li>
            <HashLink
              to={`#${SECTIONS.PROJECTS}`}
              id="proyectosHover"
              className={
                sectionIntersected === SECTIONS.PROJECTS
                  ? "lineHover"
                  : undefined
              }
              onClick={() => setNavOpen(false)}
            >
              {t("projects")}
            </HashLink>
          </li>
          <li>
            <HashLink
              to={`#${SECTIONS.SKILLS}`}
              id="skillsHover"
              className={
                sectionIntersected === SECTIONS.SKILLS ? "lineHover" : undefined
              }
              onClick={() => setNavOpen(false)}
            >
              {t("skills")}
            </HashLink>
          </li>
          <li>
            <HashLink
              to={`#${SECTIONS.CONTACTO}`}
              id="contactoHover"
              className={
                sectionIntersected === SECTIONS.CONTACTO
                  ? "lineHover"
                  : undefined
              }
              onClick={() => setNavOpen(false)}
            >
              {t("contact")}
            </HashLink>
          </li>
          <li className="language-selector">
            <span>
              <i className="fas fa-globe"></i>
            </span>
            <div className={"languageOptions"}>
              {languages.map((code) => {
                return (
                  <Flags
                    key={code}
                    code={code}
                    changeLanguage={changeLanguage}
                  ></Flags>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
