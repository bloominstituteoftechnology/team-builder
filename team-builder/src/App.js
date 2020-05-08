import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Members from './components/Members';

function App() {
  const [engineer, setEngineer] = useState([
    {
      id: 1,
      name: "Ryan Schueck",
      title: "Front-End Engineer"
      
    },
  ]);

  const submit = (member) =>{
    setEngineer({...engineer, member});
  }

  return (
    <div className="App">
      <h1>Engineering teammates</h1>
      <Form onSubmit={submit}/>
      <Members engineer={engineer}/>
    </div>
  );
}

export default App;
