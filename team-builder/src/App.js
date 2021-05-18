import React, { useState } from 'react'
import './App.css'

// initial state
const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const[teammate, setTeammate] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>

        {/* render <TeamForm 
        add props to inject in child forms
        /> */}


      </header>
    </div>
  );
}

export default App;
