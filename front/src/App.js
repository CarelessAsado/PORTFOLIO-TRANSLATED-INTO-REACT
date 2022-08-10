import { About } from "./components/About/About";
import { Intro } from "./components/Intro/Intro";
import { Nav } from "./components/Nav/Nav";
import { Backbone } from "./components/General/Backbone/Backbone";
import { LogoWhatsapp } from "./components/General/Whatsapp/LogoWhatsapp";
import { Projects } from "./components/Projects/Projects";
import { Tecnologias } from "./components/Tecnologias/Tecnologias";
import { Contacto } from "./components/Contacto/Contacto";
import { Preloader } from "./components/General/Preloader/Preloader";
import { useIntersectionObserver } from "./Hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";

function App() {
  const [navObserver, setIntroToBeObserved, entry] = useIntersectionObserver();
  const [sectionsObserver, setElements, entries] = useIntersectionObserver({
    rootMargin: "-150px",
  });
  const [whatsAppLogo, setWhatsAppLogo] = useState(false);
  const [sectionIntersected, setSectionIntersected] = useState("");
  useEffect(() => {
    let arrayOfSections = document.querySelectorAll("section");
    setElements(arrayOfSections);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.target.id === "intro" && entry.isIntersecting) {
        return setSectionIntersected("");
      }

      if (entry.target.id === "proyectos" && entry.isIntersecting) {
        setWhatsAppLogo(true);
      }
      if (entry.isIntersecting) {
        setSectionIntersected(entry.target.id);
        entry.target.style.opacity = "1";
      }
    });
  }, [entries, sectionsObserver]);
  const [navColor, setNavColor] = useState(false);
  const intro = useRef();
  useEffect(() => {
    setIntroToBeObserved([intro.current]);
  }, [setIntroToBeObserved]);
  useEffect(() => {
    if (entry.length) {
      if (!entry[0].isIntersecting) {
        return setNavColor(true);
      }
      setWhatsAppLogo(false);
      setNavColor(false);
    }
    return;
  }, [entry, navObserver]);
  return (
    <div className="App">
      <Preloader />
      <Backbone />
      <LogoWhatsapp whatsAppLogo={whatsAppLogo} />
      <Nav navColor={navColor} sectionIntersected={sectionIntersected}></Nav>
      <Intro intro={intro} />
      <About />
      <Projects />
      <Tecnologias />
      <Contacto />
    </div>
  );
}

export default App;
