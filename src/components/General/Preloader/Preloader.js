import React, { useState, useEffect } from "react";
import "./Preloader.css";
export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={`lds-dual-ring ${isLoading || "nosvimos"}`} id="preloader">
      <div className="back">
        <img className="ico" src="./img/ico.ico" alt="preloader"></img>

        <div className="containerAnimacion">
          <ul class="flip">
            <li>Welcome</li>
            <li>Bienvenue</li>
            <li>Bienvenido</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
