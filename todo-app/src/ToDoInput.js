import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

function ToDoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
    // Clicking on a link, prevent the link from following the URL.
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="d-flex justify-content-center my-4"
    >
      <TextField
        variant="outlined"
        label="Add ToDo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="ms-2"
      >
        Add Item
      </Button>
    </Box>
  );
}

export default ToDoInput;
