import React from "react";
import { useTranslation } from "react-i18next";
import "./Success.css";

const Success = () => {
  const { t } = useTranslation();
  return (
    <div id="successMsg">
      <i className="far fa-check-circle"></i>
      <div className="successText">
        <h2>{t("thanks")}!</h2>
        <div>{t("successMessage")}</div>
      </div>
    </div>
  );
};

export default Success;
