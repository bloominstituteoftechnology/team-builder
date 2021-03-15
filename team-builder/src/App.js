import './App.css';
import Form from './components.js/Form';
import React, { useState } from "react"

function App() {
  const friendsList = [
    {name: 'Joseph',
     email: 'josephesquivel111@gmail.com',
    role: 'Lambda Student'
  },
  {
    name: "Jody",
    email: "jodyfontaine@gmail.com",
    role: "Artist"
  }
  ]

  const defaultFriend = {
    name: '',
    email: '',
    role: ''
  }
  const [ newFriend, setNewFriend ] = useState(defaultFriend)
  const [ list, setList] = useState(friendsList)

  const submitHandler = e => {
    console.log('Firing')
    setList([...list, newFriend])
    e.preventDefault();
  }

  const newFriendHandler = e => {
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
