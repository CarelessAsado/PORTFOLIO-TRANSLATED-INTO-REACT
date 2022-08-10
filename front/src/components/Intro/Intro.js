import React from "react";
import "./Intro.css";
import { useTranslation } from "react-i18next";
export const Intro = ({ intro }) => {
  const { t } = useTranslation();
  return (
    <section id="intro" ref={intro}>
      <video
        className="videoIntro"
        src="/vid/codingblurry.mp4"
        autoPlay={true}
        loop={true}
      ></video>
      <div className="bannerText">
        <h1>
          <span className="izq">Rodrigo</span>{" "}
          <span className="centro">Hernán</span>{" "}
          <span className="dcha">López</span>
        </h1>
        <h2>{t("introsub")}</h2>
        <p>
          <a href="#proyectos">{t("introsub2")}&gt;</a>
        </p>
      </div>
    </section>
  );
};
