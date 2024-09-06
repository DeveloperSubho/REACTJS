import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function ToDoItem({ todo, index, toggleComplete, removeTodo }) {
  return (
    <ListItem className="d-flex justify-content-between align-items-center">
      <ListItemText
        primary={todo.text}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "green" : "black",
        }}
      />
      <div>
        <IconButton onClick={() => toggleComplete(index)} color="primary">
          {todo.completed ? <CancelIcon /> : <CheckCircleIcon />}
        </IconButton>
        <IconButton onClick={() => removeTodo(index)} color="secondary">
          <DeleteIcon />
        </IconButton>
      </div>
    </ListItem>
  );
}

export default ToDoItem;
