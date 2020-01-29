import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import FormInfo from './components/FormInfo';

function App() {
  const [members, setMembers] = useState([
    {
    id: 1,
    Name: 'Alexis Villaraza',
    Email: 'alexis.borja@gmail.com',
    Role: 'Frontend Engineer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      Name: member.name,
      Email: member.email,
      Role: member.role
    };
    setMembers([...members, newMember])
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Form />
          <FormInfo members={members}/>
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
