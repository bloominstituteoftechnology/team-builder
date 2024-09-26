import React from 'react';
import { useState } from 'react';
import './App.css';
import Member from './Member';
import TeamForm from './TeamForm';


const initialFormValues = {
name: "",
email: "",
role: ""

}




function App() {
const [members, setMembers] = useState([]);
const [formValues, setFormValues] = useState(initialFormValues);
const newForm = (inputName, inputValue) => {
setFormValues({...formValues,[inputName]: inputValue})
}

const submitForm = () => {
  
  const newMember = {
    id: Date.now(),
    name: formValues.name,
    email: formValues.email,
    role: formValues.role
  }

  setMembers([...members, newMember])
  setFormValues(initialFormValues)
}


  return (
    <div className="App">
    
      <h2>React Team Lists</h2>
      <TeamForm
      values={formValues}
      update={newForm}
      submit={submitForm}/>
      
      <ul>
      {
       members.map(member => {
          return (
            <Member key={member.id} details={member} onSubmit={submitForm} />
          )
        })
      }
      </ul>
  
    </div>
  );
}

export default App;
