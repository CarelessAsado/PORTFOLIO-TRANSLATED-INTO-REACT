import React from "react";
import { CircleFlag } from "react-circle-flags";

interface FlagsProps {
  code: string;
  changeLanguage: (code: string) => void;
}
export const Flags = ({ code, changeLanguage }: FlagsProps) => {
  return (
    <CircleFlag
      countryCode={code}
      height="35"
      onClick={() => changeLanguage(code)}
      className="banderas"
    />
  );
};
