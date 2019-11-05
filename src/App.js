import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [member, setMember] = useState("");
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
