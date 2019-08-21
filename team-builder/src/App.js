import React, { useState }  from 'react';
import Form from './Components/Form';
import './App.css';

function App() {
  const [ mates, setMates] = useState([])
  return (
    <div className="App">
      <header>Team List</header>
      <div>
      <Form />
      </div>
      
    </div>
  );
}

export default App;
