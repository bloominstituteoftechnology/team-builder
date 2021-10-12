import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';
import Form from './Form';


function App() {
  const initialFormValues = {
    ///// TEXT INPUTS /////
    name: '',
    email: '',
    ///// DROPDOWN /////
    role: '',
  }

const [formValues, setFormValues] = useState(initialFormValues)
const [members, setMembers] = useState([]);


const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
}

const submitForm = () => {
  
    const newMember = {
      name: formValues.name.trim(),
      email:formValues.email.trim(),
      role: formValues.role
    }

    setMembers([newMember, ...members])

}


  return (

    <div className="App">
      <Form 
      values={formValues}
      submit={submitForm}
      update={updateForm}
      />
     
      <h2>Team Members</h2>
      <hr></hr>
      {
        members.map(mem => {
          return(
            <div>
              <p>Name: {mem.name}</p>
              <p>Email: {mem.email}</p>
              <p>Role: {mem.role}</p>
              <hr></hr>
            </div>
          )
        })
      }
    </div>
    

  );
}

export default App;
