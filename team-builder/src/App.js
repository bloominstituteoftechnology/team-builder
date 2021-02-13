import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import styled from 'styled-components'




function App() {

  const [ formValues, setFormValues ] = useState({ first_name:"",last_name:"",email:"",title:"",});
  const [ friends, setFriends ] = useState([]);
  // helper functions for submit and onchange

  const onChange = event => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const newMember = {
      first_name: formValues.name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      title: formValues.title.trim(),
    }
    setFriends([newMember, ...friends])
  }

  return (
    <div className="App">
      Simple Team Building Form!
      <Form
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      {friends.map(friend => {
          return (
            <div key={friend.id}>
              <h2>{friend.first_name}</h2>
              <h2>{friend.last_name}</h2>
              <h3>{friend.email}</h3>
              <h3>{friend.title}</h3>
            </div>
          )
        })
      }
      </div>
  );
    }
      



export default App;