import React from "react";
import { useTranslation } from "react-i18next";
import { FIRST_PROJECT } from "./dataProjects";

export const Project = ({ project }: { project: typeof FIRST_PROJECT }) => {
  const { t } = useTranslation();
  const { alt, img, descripcion, github, web, titulo, tecnologias } = project;
  return (
    <div className="proyectoItem">
      <div className="imgContainer">
        <img src={img} alt={alt} className="bajarFoto"></img>
        <div className="proyectoOverlay">
          <div className="additionalInfo">
            <i className="fas fa-info"></i>
          </div>
          <div id="restOfTheInfo">
            {descripcion}
            <div className="flex">
              {tecnologias.map((item, i) => (
                <h4 key={i}>{item}</h4>
              ))}
            </div>
          </div>
          <div className="textMargin">
            <div className="titleProject">{titulo}</div>
            <div className="descriptionProject">{descripcion}</div>
            <div className="linksProject">
              {github ? (
                <a
                  href={github}
                  className="btnSvg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="logoGit">{t("git")}</span>
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                  </svg>
                </a>
              ) : (
                <button className="btnSvg" disabled={true}>
                  <span className="logoGit">{t("unavailable")}</span>
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                  </svg>
                </button>
              )}

              {web ? (
                <a
                  className="btnSvg"
                  href={web}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="logoWeb">WEBSITE</span>
                  <svg
                    className="MuiSvgIcon-root alt"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                  </svg>
                </a>
              ) : (
                <button className="btnSvg" disabled={true}>
                  <span className="logoWeb">{t("unavailable")}</span>
                  <svg
                    className="MuiSvgIcon-root alt"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                  </svg>
                </button>
              )}
            </div>
            <div className="tecnologiasProject">
              {tecnologias.map((item, i) => (
                <h4 key={i}>{item}</h4>
              ))}
            </div>
          </div>
        </div>
        <div className="projectFooter"></div>
        <div className="footerOverlay"></div>
      </div>
    </div>
  );
};
