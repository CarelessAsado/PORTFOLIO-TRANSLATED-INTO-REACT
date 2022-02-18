import { useState } from "react";
import "./Nav.css";
import { useTranslation } from "react-i18next";
import { Flags } from "../Flags/Flags";
export const Nav = ({ navColor, sectionIntersected }) => {
  const [navOpen, setNavOpen] = useState(false);
  const languages = ["gb", "ar", "fr"];
  const { t, i18n } = useTranslation();
  function changeLanguage(code) {
    i18n.changeLanguage(code);
    setNavOpen(false);
  }

  return (
    <nav className={navColor ? "afterScroll" : undefined}>
      <div className="nav-center">
        <div className=" nav-header espaciar">
          <div className="logo">
            <a href="#">
              <img id="logoRHL" src="/img/logo.png" alt="logoHome" />
            </a>
          </div>

          <div className="nav-button" onClick={() => setNavOpen(!navOpen)}>
            <div className="burger-dash"></div>
          </div>
        </div>

        <ul className={`links ${navOpen && "active"}`}>
          <li>
            <a
              href="#about"
              id="aboutHover"
              class={sectionIntersected === "about" ? "lineHover" : undefined}
              onClick={() => setNavOpen(false)}
            >
              {t("about")}
            </a>
          </li>

          <li>
            <a
              href="#proyectos"
              id="proyectosHover"
              class={
                sectionIntersected === "proyectos" ? "lineHover" : undefined
              }
              onClick={() => setNavOpen(false)}
            >
              {t("projects")}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              id="skillsHover"
              class={sectionIntersected === "skills" ? "lineHover" : undefined}
              onClick={() => setNavOpen(false)}
            >
              {t("skills")}
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              id="contactoHover"
              class={
                sectionIntersected === "contacto" ? "lineHover" : undefined
              }
              onClick={() => setNavOpen(false)}
            >
              {t("contact")}
            </a>
          </li>
          <li className="language-selector">
            <a>
              <i className="fas fa-globe"></i>
            </a>
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
