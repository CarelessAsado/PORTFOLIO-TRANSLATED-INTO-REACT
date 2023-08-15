import React, { RefObject } from "react";
import "./Intro.css";
import { useTranslation } from "react-i18next";
import { SECTIONS } from "utils/constants";

export const Intro = ({ intro }: { intro: RefObject<HTMLElement> }) => {
  const { t } = useTranslation();
  return (
    <section id={SECTIONS.INTRO} ref={intro}>
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
          <a href={`#${SECTIONS.PROJECTS}`}>{t("introsub2")}&gt;</a>
        </p>
      </div>
    </section>
  );
};
