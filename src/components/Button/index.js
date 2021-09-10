import React, { useContext } from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import "./styles.css";
import { ThemeContext } from "../../utils/ThemeContext";

export const Button = ({ children }) => {
  const contextValue = useContext(ThemeContext);
  return (
    <div
      className={`my-button ${
        contextValue.theme === "light" ? "button-light" : "button-dark"
      }`}
      role="button"
    >
      {children("text from child")}
    </div>
  );
};
