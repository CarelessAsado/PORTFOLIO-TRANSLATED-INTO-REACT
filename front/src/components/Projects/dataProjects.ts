import PERSONAL_DATA from "utils/constants";

export const FIRST_PROJECT = {
  descripcion: "",
  img: "/img/perf-mundial.png",
  alt: "",
  tecnologias: [
    "React",
    "Mongo",
    "Mercado Pago API",
    "Node",
    "Styled-components",
  ],
  titulo: "",
  github: "",
  web: "https://www.perfumeriamundial.ar/",
};
export const dataProjects: (typeof FIRST_PROJECT)[] = [
  FIRST_PROJECT,

  {
    descripcion: "",
    img: "/img/rodribook.png",
    alt: "",
    tecnologias: [
      "Typescript",
      "Socket.io",
      "Firebase",
      "Redux Thunk",
      "Cloudinary",
    ],
    titulo: "RODRIBOOK WEBSITE",
    github: "https://github.com/CarelessAsado/firebase_nested_comments",
    web: "https://bright-fudge-e510f2.netlify.app/",
  },

  {
    descripcion: "",
    img: "/img/Portfolio.png",
    alt: "",
    tecnologias: ["React", "Intersection Observer", "i18n", "PostgreSQL"],
    titulo: "",
    github: "https://github.com/CarelessAsado/PORTFOLIO-TRANSLATED-INTO-REACT",
    web: PERSONAL_DATA.web,
  },

  {
    descripcion: "",
    img: "/img/rohelaw.com.ar.png",
    alt: "proyecto Rohelaw",
    tecnologias: ["Javascript", "HTML", "CSS"],
    titulo: "ROHELAW WEBSITE",
    github: "https://github.com/CarelessAsado/sworntranslation_site",
    web: "http://rohelaw.com.ar/",
  },
];
