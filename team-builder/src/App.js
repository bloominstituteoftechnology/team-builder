import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Form from './components/Form';


// test
const initialFormValues = {
  Name: "",
  Email: "",
  Role: ""
}
function App() {
  const [member, setMember] = useState([
    {
      Name: 'Remington the Great',
      Email: 'josephvila123@gmail.com',
      Role: "Daydreamer"
    }
  ])
  const [formValues, setFormValues] = useState(initialFormValues)
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }
  const submitForm = () => {
    let newMember = {
      Name: formValues.Name.trim(),
      Email: formValues.Email.trim(),
      Role: formValues.Role.trim(),
    }
    setMember(
      [...member, newMember]
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Membros, LET'S GOOOOO!!</h1>
      </header>
      <div className="section">
        <Form update={updateForm} values={formValues} submit={submitForm}/>
        {member.map(member => {
          return (
            <div>
              <h2>{member.Name}</h2>
              <p>{member.Email}</p>
              <p>{member.Role}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default App;



