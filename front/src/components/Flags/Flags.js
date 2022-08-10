import React from "react";
import { CircleFlag } from "react-circle-flags";
export const Flags = ({ code, changeLanguage }) => {
  return (
    <CircleFlag
      countryCode={code}
      height="35"
      onClick={() => changeLanguage(code)}
      className="banderas"
    />
  );
};
