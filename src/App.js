import React, { useState } from 'react';
import Form from "./Components/Form";
import './App.css';

function App() {
  /*
  * Create state variables to hold team members and hold form values
  * Create updated and submit functions
  */
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: "", email: "", role: ""});

  return (
    <div className="App">
      <h1>Team Builder App!</h1>
      <Form
        values
    </div>
  );
}

export default App;
