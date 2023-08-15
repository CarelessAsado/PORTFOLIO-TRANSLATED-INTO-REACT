import { useEffect, useRef, useState, useCallback } from "react";

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  //ELEMENTOS Q QUIERO OBSERVAR
  const [elements, setElements] = useState<HTMLElement[]>([]);

  /**
   *
   * @param elements array of HTMLElements to be observed
   */
  const setHTMLElementsToBeObserved = useCallback((elements: HTMLElement[]) => {
    setElements(elements);
  }, []);

  //ARRAY DE ENTRIES Q ME DEVUELVE USEREF.CURRENT
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);
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
    /*  return () => {
     
      if (myObserver.current) {
        myObserver.current.disconnect();
      }
    }; */
  }, [elements]);
  return [myObserver.current, setHTMLElementsToBeObserved, entries] as const;
};
