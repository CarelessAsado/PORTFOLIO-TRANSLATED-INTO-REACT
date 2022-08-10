import React from "react";
import { Project } from "./Project";
import "./Projects.css";
import { dataProjects } from "./dataProjects";
import { useTranslation } from "react-i18next";
export const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="proyectos">
      <header className="proyectosHeader">
        <h2>{t("projects")}</h2>
        <span className="tituloFantasma">{t("projects")}</span>
      </header>
      <div className="proyectosGridContainer">
        {dataProjects.map((item, i) => {
          item.descripcion = i18n.t(`dataprojects.${i}.descripcion`);
          item.titulo = i18n.t(`dataprojects.${i}.titulo`);
          item.alt = i18n.t(`dataprojects.${i}.alt`);
          return <Project key={i} project={item} />;
        })}
      </div>
    </section>
  );
};
