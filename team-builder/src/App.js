import React, { useState } from 'react'
import Member from "./components/Member"
import MemberForm from './components/MemberForm'

import './App.css';

const initialValue ={
  username:'',
  email:'',
  role:''
}


function App() {
  const [member, setMember] =useState([])
  const [formValues, setFormValues] = useState(initialValue)
  const submitForm = () =>{
    

    }
  
  const updateForm = (input1, input2) =>{
    setFormValues({...formValues, [input1]:input2})
    
  }



  return (
    <div className="App">
      <header className="container">
        <div>
          <h1>List of team members</h1>
    <MemberForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}

    />
        </div>
      </header>
    </div>
  );
}

export default App;
