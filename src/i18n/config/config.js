import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "gb",
  lng: "gb",
  resources: {
    gb: {
      translations: require("../lang/EN/translation.json"),
    },
    ar: {
      translations: require("../lang/AR/translation.json"),
    },
    fr: {
      translations: require("../lang/FR/translation.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["gb", "ar", "fr"];

export default i18n;
