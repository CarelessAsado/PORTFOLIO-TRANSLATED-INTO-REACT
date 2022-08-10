import React, { useState } from "react";
import "./Contacto.css";
import contactData from "./Datos";
import { useTranslation } from "react-i18next";
import { sendData } from "../../API/contact";

export const Contacto = () => {
  const { t } = useTranslation();
  const [contactame, setContactame] = useState({
    name: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  function handleChange({ target }) {
    setContactame({ ...contactame, [target.name]: target.value });
  }
  async function handleYourBusiness(e) {
    e.preventDefault();
    try {
      const { data } = await sendData(contactame);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section id="contacto">
      <header className="contactoHeader">
        <h2>{t("contact")}</h2>
        <span className="tituloFantasma">{t("contact")}</span>
      </header>

      <div className="contactoGridContainer">
        <div className="contactoGridIzq">
          <div className="emailInfoContacto">
            <i className="far fa-envelope"></i>
            <span>{contactData.email}</span>
          </div>
          <div className="celularInfoContacto">
            <i className="fab fa-whatsapp green-color" aria-hidden="true"></i>
            <span>
              (+54 9) 11-{contactData.cel.slice(4, 8)}-
              {contactData.cel.slice(8)}
            </span>
          </div>
        </div>

        <div className="contactoGridDcha">
          <form id="contactForm" onSubmit={handleYourBusiness}>
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
            {/*------------ NAME ---------------*/}
            <div className="input">
              <input
                type="text"
                id="name"
                className="inputPosta"
                placeholder="Nombre *"
                name="name"
                onChange={handleChange}
                required
              />
              <label htmlFor="name">{t("name")}</label>
            </div>
            {/* -------------EMAIL--------------- */}
            <div className="input">
              <input
                type="email"
                id="email"
                className="inputPosta"
                placeholder="Email *"
                name="email"
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input span2">
              {/* ------------ASUNTO---------------- */}
              <input
                type="text"
                className="inputPosta"
                id="asunto"
                placeholder="Asunto"
                name="asunto"
                onChange={handleChange}
              />
              <label htmlFor="asunto">{t("subject")}</label>
            </div>
            <div className="inputControl span2">
              {/* --------------MENSAJE--------------- */}
              <textarea
                id="mensaje"
                rows="5"
                placeholder="Mensaje *"
                name="mensaje"
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="mensaje" id="textAreaLabel">
                {t("message")}
              </label>
            </div>
            <div className="inputControl span2">
              <label htmlFor="botonEnviarForm"></label>
              <input type="submit" id="botonEnviarForm" value={t("send")} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
