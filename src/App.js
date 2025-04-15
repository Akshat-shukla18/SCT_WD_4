import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [error, setError] = useState('');

  const addTodo = () => {
    if (inputValue.trim() && dateTime) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false, dateTime }]);
      setInputValue('');
      setDateTime('');
      setError('');
    } else {
      setError('Please enter a task and select a date/time!');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearTodos = () => {
    setTodos([]);
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
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearTodos}>Clear All</button>
      </div>
      {error && <p className="error">{error}</p>}
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <span>{todo.text} <small>({new Date(todo.dateTime).toLocaleString()})</small></span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

