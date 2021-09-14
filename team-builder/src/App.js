import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Form from './components/Form';
import Member from './components/Member';

const initialFormValues = {
  name: "",
  email: "",
  role: ""
}

function App() {
  const [formValue, setFormValue] = useState(initialFormValues);
  const [members, setMembers] = useState([]);

  const formUpdate = (inputName, inputValue) => {
    console.log(inputName, inputValue);
    setFormValue({ ...formValue, [inputName]: inputValue});
  }

  const formSubmit = () => {
    const newMember = {
      name: formValue.name,
      email: formValue.email,
      role: formValue.role
    }
    // axios.post('fakeapi.com', newMember)
    //   .then(res => {
    //     console.log(res)
    //     const newMemberFromDb = (res.data)
    //     setMembers([ ...members, newMemberFromDb])
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
    setMembers([ ...members, newMember]);
    setFormValue(initialFormValues);
  }

  // useEffect(() => {
  //   axios.get('fakeapi.com')
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>team builder</h1>
        <Form value={formValue} update={formUpdate} submit={formSubmit}/>

        <div>
          <h2>Members List</h2>
        {members.map(member => {
            return (
              <Member key={member.id} details={member}/>
              )
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
