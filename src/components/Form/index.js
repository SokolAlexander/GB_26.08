import React, { useState, useRef, useCallback } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "../Button";

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
      <Button>
        {(text) => (
        <>
          <span>RENDER PROP</span>
          <span>{text}</span>
        </>
        )}
      </Button>
    </form>
  );
};
