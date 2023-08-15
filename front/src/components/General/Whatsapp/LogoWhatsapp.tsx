import React from "react";
import "./LogoWhatsapp.css";
import PERSONAL_DATA from "utils/constants";
import { useTranslation } from "react-i18next";

export const LogoWhatsapp = ({ whatsAppLogo }: { whatsAppLogo: boolean }) => {
  const { t } = useTranslation();
  return (
    <a
      href={`https://wa.me/${PERSONAL_DATA.cel}?text=${t("hello")} Rodrigo`}
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
