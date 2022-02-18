import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (options) => {
  //ELEMENTOS Q QUIERO OBSERVAR
  const [elements, setElements] = useState([]);
  //ARRAY DE ENTRIES Q ME DEVUELVE USEREF.CURRENT
  const [entries, setEntries] = useState([]);

  const myObserver = useRef(
    new IntersectionObserver(function (entries) {
      setEntries(entries);
    }, options)
  );
  useEffect(() => {
    if (elements.length > 0) {
      elements.forEach((e) => {
        myObserver.current.observe(e);
      });
    }
    return () => {
      if (myObserver.current) {
        myObserver.current.disconnect();
      }
    };
  }, [elements]);
  return [myObserver.current, setElements, entries];
};
