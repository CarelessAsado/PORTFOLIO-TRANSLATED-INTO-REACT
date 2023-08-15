import { About } from "components/About/About";
import { Intro } from "components/Intro/Intro";
import { Nav } from "components/Nav/Nav";
import { Backbone } from "components/General/Backbone/Backbone";
import { LogoWhatsapp } from "components/General/Whatsapp/LogoWhatsapp";
import { Projects } from "components/Projects/Projects";
import { Tecnologias } from "components/Tecnologias/Tecnologias";
import { Contacto } from "components/Contacto/Contacto";
import { Preloader } from "components/General/Preloader/Preloader";
import { useIntersectionObserver } from "Hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";
import { getUser } from "API/contact";
import React from "react";
import { SECTIONS } from "utils/constants";

//TODO: forwardref??
//TODO: type section ids
//TODO: check api error on console on client side
//TODO: type translations

function App() {
  const [navObserver, setIntroToBeObserved, entry] = useIntersectionObserver();
  const [sectionsObserver, setSectionElementsToBeObserved, entries] =
    useIntersectionObserver({
      rootMargin: "-150px",
    });
  const [whatsAppLogo, setWhatsAppLogo] = useState(false);
  const [sectionIntersected, setSectionIntersected] = useState("");
  useEffect(() => {
    let arrayOfSections = Array.from(document.querySelectorAll("section"));
    setSectionElementsToBeObserved(arrayOfSections);
  }, [setSectionElementsToBeObserved]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.target.id === SECTIONS.INTRO && entry.isIntersecting) {
        return setSectionIntersected("");
      }

      // show whatsapp logo when we are on proyectos
      if (entry.target.id === SECTIONS.PROJECTS && entry.isIntersecting) {
        setWhatsAppLogo(true);
      }
      if (entry.isIntersecting && entry.target instanceof HTMLElement) {
        setSectionIntersected(entry.target.id);
        entry.target.style.opacity = "1";
      }
    });
  }, [entries, sectionsObserver]);

  const [navColor, setNavColor] = useState(false);
  const intro = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!intro?.current) return;
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

  //GEOIP-LITE
  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
