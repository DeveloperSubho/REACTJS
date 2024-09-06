import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    // For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.
    // Clicking on a link, prevent the link from following the URL.
    e.preventDefault();
    if (inputText.trim() !== "") {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo item"
          value={inputText}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div>
            <span
              key={index}
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleCompleted(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
