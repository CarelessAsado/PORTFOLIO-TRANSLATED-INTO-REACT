import React, { useState } from "react";
import "./Contacto.css";
import PERSONAL_DATA, { SECTIONS } from "utils/constants";
import { useTranslation } from "react-i18next";
import { sendData } from "API/contact";
import Success from "./auxiliaries/Success";

const emailStr: keyof Pick<emailContactInfo, "email"> = "email";
const asuntoStr: keyof Pick<emailContactInfo, "asunto"> = "asunto";
const nameStr: keyof Pick<emailContactInfo, "name"> = "name";
const msjeStr: keyof Pick<emailContactInfo, "mensaje"> = "mensaje";

export const Contacto = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [contactame, setContactame] = useState<emailContactInfo>({
    name: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [success, setSuccess] = useState(false);
  function handleChange({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContactame({ ...contactame, [target.name]: target.value });
  }
  async function handleYourBusiness(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await sendData(contactame);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section id={SECTIONS.CONTACTO}>
      <header className="contactoHeader">
        <h2>{t("contact")}</h2>
        <span className="tituloFantasma">{t("contact")}</span>
      </header>

      <div className="contactoGridContainer">
        <div className="contactoGridIzq">
          <div className="emailInfoContacto">
            <i className="far fa-envelope"></i>
            <span>{PERSONAL_DATA.email}</span>
          </div>
          <div className="celularInfoContacto">
            <i className="fab fa-whatsapp green-color" aria-hidden="true"></i>
            <span>
              (+54 9) 11-{PERSONAL_DATA.cel.slice(4, 8)}-
              {PERSONAL_DATA.cel.slice(8)}
            </span>
          </div>
        </div>

        <div className="contactoGridDcha">
          {success ? (
            <Success />
          ) : (
            <form id="contactForm" onSubmit={handleYourBusiness}>
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              {/*------------ NAME ---------------*/}
              <div className="input">
                <input
                  type="text"
                  id={nameStr}
                  className="inputPosta"
                  placeholder="Nombre *"
                  name={nameStr}
                  onChange={handleChange}
                />
                <label htmlFor={nameStr}>{t(nameStr)}</label>
              </div>
              {/* -------------EMAIL--------------- */}
              <div className="input">
                <input
                  type="email"
                  id={emailStr}
                  className="inputPosta"
                  placeholder="Email *"
                  name={emailStr}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={emailStr}>Email</label>
              </div>
              <div className="input span2">
                {/* ------------ASUNTO---------------- */}
                <input
                  type="text"
                  className="inputPosta"
                  id={asuntoStr}
                  placeholder="Asunto"
                  name={asuntoStr}
                  onChange={handleChange}
                />
                <label htmlFor={asuntoStr}>{t("subject")}</label>
              </div>
              <div className="inputControl span2">
                {/* --------------MENSAJE--------------- */}
                <textarea
                  id={msjeStr}
                  rows={5}
                  placeholder="Mensaje *"
                  name={msjeStr}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor={msjeStr} id="textAreaLabel">
                  {t("message")}
                </label>
              </div>
              {/*---------------- SUBMIT BUTTON ---------*/}
              <div className="inputControl span2">
                <label htmlFor="botonEnviarForm"></label>

                <button className="botonEnviarForm">
                  {loading ? (
                    <>
                      <span className="loader"></span>
                      <span className="loader"></span>
                      <span className="loader"></span>
                    </>
                  ) : (
                    t("send")
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
