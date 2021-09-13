import React, { useState, useRef, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";

export const Form = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");

    inputRef.current.focus();
  };

  console.log(inputRef);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="message"
        label="Label"
        value={value}
        onChange={handleChange}
        inputRef={inputRef}
      />
      <Button variant="outlined" type="submit">
        Send
      </Button>
    </form>
  );
};
