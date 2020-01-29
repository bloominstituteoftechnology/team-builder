import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import FormInfo from './components/FormInfo';

function App() {
  const [members, setMembers] = useState([
    {
    id: 1,
    name: 'Alexis Villaraza',
    email: 'alexis.borja@gmail.com',
    role: 'Frontend Engineer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <Form addNewMember={addNewMember}/>
          <FormInfo members={members}/>
        
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
