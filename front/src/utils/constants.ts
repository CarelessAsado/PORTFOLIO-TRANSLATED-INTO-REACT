const OLD_HEROKU_URL = "https://portfoliobackendrodrigo.herokuapp.com";

const RENDER_URL = "https://portfoliobackend.onrender.com";

const API_VERSION = "/api/v1";

export const BACKEND_ROOT =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? `http://localhost:5000${API_VERSION}`
    : `${RENDER_URL}${API_VERSION}`;

const PERSONAL_DATA = {
  cel: "541137561057",
  email: "contacto@rodrigohernanlopez.com.ar",
  web: "https://www.rodrigohernanlopez.com.ar/",
} as const;
export default PERSONAL_DATA;

export const SECTIONS = {
  INTRO: "intro",
  CONTACTO: "contacto",
  ABOUT_ME: "about",
  PROJECTS: "proyectos",
  SKILLS: "skills",
} as const;
