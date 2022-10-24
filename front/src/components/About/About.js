import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <header className="aboutHeader">
        <p>
          <em> "{t("greeting")}"</em>
        </p>
        <h2>{t("about")}</h2>
        <span className="tituloFantasma">{t("about")}</span>
      </header>
      <div className="aboutContainer">
        <div className="aboutGridIzq">
          <h3>{t("aboutTitle")}.</h3>
          <p>{t("about1")}</p>
          <p>
            {t("about2")} <span className="freeWilly">Typescript</span>,{" "}
            <span>MongoDb</span>, <span className="Js">Javascript</span>,{" "}
            <span>Nodejs</span>, & <span className="freeWilly">React</span>,{" "}
            {t("about2bis")}
          </p>
          <p>{t("about3")}</p>
          <p>
            {/* update Spanish and French cv later ${t("pdf")} */}
            <a className="blue" href={`./cv/CV Eng 2022.pdf`} download>
              {t("aboutEnd")}
            </a>
          </p>
        </div>
        <div className="aboutGridDcha">
          <img src="/img/rod2.png" alt="imagen chico guapo" />
        </div>
      </div>
    </section>
  );
};
