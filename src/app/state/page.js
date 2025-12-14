'use client';

import React, { useState } from 'react'
import navbar from '../navbar';
function page() {
    const [ inputValue, setInputValue] = useState("")
    const [count, setCount] = useState(0)




  //   const initialTodos = [];
  // for (let i = 0; i <navbar 0; i++) {
  //   initialTodos.push({
  //     id: i,
  //     text: 'Item ' + (i + 1)
  //   });
  // }
  // const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState('');


const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);


const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  


  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const styles = {
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    color: darkMode ? '#f5f5f5' : '#121212',
    minHeight: '100vh',
    padding: '2rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };
  };
  return (
    <div>
    <div sx={{ml:'200'}}>
      <input type='text' placeholder='enter youre name'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}></input>
      <p>you're name:-<strong>{inputValue || 'stranger'}</strong></p>
      <p>number:-{count}</p>
      <button onClick={() =>setCount (count + 1)}>counting</button>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]);
      }}>Add</button>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
 
<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>




{/* input name*/}
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Hello, {name || 'Stranger'}!</h3>
  </div>

{/*hide show massage*/}
  <div style={{ textAlign: 'center', marginTop: 40 }}>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Message
      </button>
      {show && <p>This is a toggled message!</p>}
    </div>
{/*like and unlike button*/}

     <div style={{ textAlign: 'center', marginTop: 40 }}>
      <button onClick={toggleLike}>
        {liked ? 'Unlike' : 'Like'} ({likes})
      </button>
    </div>

    {/*dark mode and light mode */}
    <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
    </div>
  )
}

export default page;
