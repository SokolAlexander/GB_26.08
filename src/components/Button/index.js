import React, { useContext } from "react";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import "./styles.css";
import { ThemeContext } from "../../utils/ThemeContext";

export const Button = ({ children, onClick }) => {
  console.log('render button');
  return (
    <div
      className='my-button'
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
