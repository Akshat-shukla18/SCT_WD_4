// src/App.js
import './App.css'; // Ensure this line is present
import React, { useState } from 'react';

function App() {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle the addition of a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      // Add a new todo with a unique ID and completion status
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue(''); // clear input field after adding
    }
  };

  // Function to remove a todo by its ID
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to toggle the 'completed' status of a todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>{todo.completed ? 'Undo' : 'Complete'}</button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;