import React from "react";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import './styles.css';

export const Button = ({ children }) => {
  return (
    <div className="my-button" role="button">
      {children('text from child')}
    </div>
  );
};
