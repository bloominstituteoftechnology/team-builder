import React, { useState } from 'react';
import Form from "./Form"
import './App.css';

const initialTeamValue = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [teamMembers, setTeamMembers] = useState(initialTeamValue)

  return (
    <div className="App">
      <h2>Hello World!</h2>
    </div>
  );
}

export default App;
