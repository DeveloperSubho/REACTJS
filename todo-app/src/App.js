import React, { useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    /**
     * Callback function (_, i) => i !== index:
     * The filter method takes a callback function as an argument. This callback function is executed for each element in the array.
     * The callback function takes two parameters:
     * * The first parameter (typically element or _ in this case) represents the current element being processed in the array.
     * * The second parameter (i) represents the index of the current element being processed in the array.
     * In this case, the underscore _ is used as a placeholder for the first parameter since it is not needed in the function body.
     */
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container>
      <Typography variant="h2" className="text-center my-4">
        ToDo App
      </Typography>
      <ToDoInput addTodo={addTodo} />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </Container>
  );
}

export default App;
