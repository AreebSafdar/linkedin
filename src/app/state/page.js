'use client';

import React, { useState } from 'react';

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleLike = () => {
    setLiked(prev => !prev);
    setLikes(prev => prev + (liked ? -1 : 1));
  };

  const toggleTheme = () => setDarkMode(prev => !prev);

  const styles = {
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    color: darkMode ? '#f5f5f5' : '#121212',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  const handleAddTodo = () => {
    if (!text.trim()) return;
    setTodos(prev => [{ id: prev.length + 1, text: text.trim() }, ...prev]);
    setText('');
  };

  return (
    <div style={styles}>
      <div style={{ marginLeft: 200 }}>
        <input
          type='text'
          placeholder='enter your name'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>your name: <strong>{inputValue || 'stranger'}</strong></p>
        <p>number: {count}</p>
        <button onClick={() => setCount(count + 1)}>counting</button>

        <div style={{ marginTop: 12 }}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='todo text'
          />
          <button onClick={handleAddTodo}>Add</button>
          <ul>
            {todos.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: 12 }}>
          <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        </div>

        {/* input name */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <input
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Hello, {name || 'Stranger'}!</h3>
        </div>

        {/* hide/show message */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button onClick={() => setShow(!show)}>
            {show ? 'Hide' : 'Show'} Message
          </button>
          {show && <p>This is a toggled message!</p>}
        </div>

        {/* like/unlike button */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <button onClick={toggleLike}>
            {liked ? 'Unlike' : 'Like'} ({likes})
          </button>
        </div>

        {/* dark mode toggle */}
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleTheme}>
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}
