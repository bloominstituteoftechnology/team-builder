import React, { useState } from 'react'
import List from './List/list'
import ListForm from './List/listForm'
import './App.css';

const initialFromValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [list, setList] = useState([])
  
  const [formValues, setFormValues] = useState(initialFromValues);
  const [error, setError] = useState("")
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }
  
  const submitForm = async () => {
    
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
    };
    if(!newMember.name || !newMember.email || !newMember.role) {
      setError("Error must type in something")
    }
    setList([newMember, ...list]);
  
  }
  

  return (
    <div className="App">
    </div>
  );
}

export default App;
