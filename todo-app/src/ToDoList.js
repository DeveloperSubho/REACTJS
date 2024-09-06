import React from "react";
import ToDoItem from "./ToDoItem";
import List from "@mui/material/List";

function ToDoList({ todos, toggleComplete, removeTodo }) {
  return (
    <List>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}

export default ToDoList;
