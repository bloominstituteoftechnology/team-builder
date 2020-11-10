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
      Email: 'nunyabiznass@yomomma.com',
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

  let newMember = {};
  const submitForm = () => {
      newMember = {
      Name: formValues.Name.trim(),
      Email: formValues.Email.trim(),
      Role: formValues.Role.trim(),
    }


    // const exists = member.Name.find(name => name.Name === member.Name);
    // if(exists === true) return;
    setMember(
      [...member, newMember]
    )

    // const exists = null;
    // for(let i = 0; i < member.length; i++){
    //   exists = member[i].find(check => check.Name === member.Name);
    //   if(exists === true) return;
    // }

    // console.log('member post setMember', member[0].Name);
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



