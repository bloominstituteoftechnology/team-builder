import './App.css';
import Form from './components.js/Form';
import React, { useState } from "react"


function App() {

  const friendsList = [ 
    { 
      name: 'Nathan',
      email: 'nathan.adel.chagar@gmail.com',
      role: 'Lambda Student'
    },
  
    {
      name: 'Greg',
      email: 'gregit@gmail.com',
      role: 'Student'
    }
  ]

  const defaultFriend = {
    name: '',
    email: '',
    role: ''
  }
  
  const [ newFriend, setNewFriend ] = useState(defaultFriend)
  const [ list, setList ] = useState(friendsList)

  const submitHandler = e => {
      console.log('Firing')
      setList([...list, newFriend])
      e.preventDefault();
  }

  const newFriendHandler = e => {
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h1>List of Team Members</h1>
      <Form list={list} update={newFriendHandler}  submit={submitHandler}/>     
    </div>
  );
}

export default App;
