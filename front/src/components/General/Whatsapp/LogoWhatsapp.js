import React from "react";
import "./LogoWhatsapp.css";
import datos from "../../Contacto/Datos";
import { useTranslation } from "react-i18next";
export const LogoWhatsapp = ({ whatsAppLogo }) => {
  const { t } = useTranslation();
  return (
    <a
      href={`https://wa.me/${datos.cel}?text=${t("hello")} Rodrigo`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        id="whatsappLogo"
        className={whatsAppLogo ? "show" : undefined}
        src="/img/whatsapp.png"
        alt=""
      />
    </a>
  );
};
