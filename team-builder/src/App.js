import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [name, setName] = useState({ name:"", email:"", role:""});
const [email, setEmail] = useState("");
const [role, setRole] = useState("");

  const handleChange = event => {
    setName({ ...name, [event.target.name] :  event.target.value });
  };

  const handlePasswordChange = event => {
    setName({ ...name, [event.target.name] :  event.target.value });
  };

  const handleRoleChange = event => {
    setName({ ...name, [event.target.name] :  event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name.name);
    console.log(name.email);
    console.log(name.role);
  };

  return (
    <div className="App">
      {console.log({name})}
      {console.log({email})}
      {console.log({role})}
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
        <form onSubmit={event => handleSubmit(event)}>
        <label>
          MemberName:
          <input  type='text' 
                  name= 'name' 
                  value={name.name}
                  onChange={event => handleChange(event)} />
        </label>
        <label>
          Email:
          <input  type='text' 
                  name= 'email'
                  value={name.email}
                  onChange={event => handleChange(event)} />
        </label>
        <label>
          Role:
          <input  type='text' 
                  name= 'role'
                  value={name.role}
                  onChange={event => handleChange(event)} />
        </label>
        <button>Submit</button>
      </form>
      </header>
      </div>
  );
}

export default App;
