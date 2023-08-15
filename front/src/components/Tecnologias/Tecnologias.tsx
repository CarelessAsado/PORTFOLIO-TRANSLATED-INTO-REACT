import React from "react";
import "./Tecnologias.css";
import { useTranslation } from "react-i18next";
import { SECTIONS } from "utils/constants";
export const Tecnologias = () => {
  const { t } = useTranslation();
  return (
    <section id={SECTIONS.SKILLS}>
      <header className="skillsHeader">
        <h2>{t("skills")}</h2>
        <span className="tituloFantasma">{t("skills")}</span>
      </header>
      <div className="skillsContainer">
        <img src="/img/skills/nodejs.png" className="node" alt="nodejs" />

        <img src="/img/skills/express.png" className="express" alt="express" />

        <img
          src="/img/skills/typescript.png"
          alt="Typescript"
          className="span2"
        />
        <img src="/img/skills/react.png" className="span2" alt="react" />
        <img src="/img/skills/redux.png" alt="Redux" className="span2" />
        <img src="/img/skills/mongodb.png" className="span2" alt="mongodb" />
        <img src="/img/skills/mongoose.png" className="span2" alt="mongoose" />
        <img src="/img/skills/github.png" className="span2" alt="github" />
        <img src="/img/skills/jwt.png" alt="jsonwebtoken " className="span2" />
        <img
          src="/img/skills/cognito.png
        "
          className="span2"
          alt="cognito"
        />
        <img
          src="/img/skills/passport.png"
          className="span2"
          alt="passport.js"
        />

        <img
          src="/img/skills/styled.png"
          alt="Styled components"
          className="span2 styled"
        />

        <img
          src="/img/skills/postgresql.png"
          className="span2"
          alt="postgresql"
        />
        <img src="/img/skills/typeorm.png" className="span2" alt="typeorm" />
        <img
          src="/img/skills/photoshop.png"
          className="photo span2"
          alt="photoshop"
        />
        <img src="/img/skills/Html5-JS-css-logo.png" className="span2" alt="" />
        <img
          src="/img/skills/ableton.png"
          className="photo span2"
          alt="ableton"
        />
      </div>
    </section>
  );
};
