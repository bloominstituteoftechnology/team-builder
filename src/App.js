import React, { useState, useEffect } from 'react'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'
import './App.css';

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

export default function App() {
  const [friends, setFriends] = useState([]) 
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(), 
      role: formValues.role,
    }
    if (!newFriend.username || !newFriend.email || !newFriend.role){
      return
    }
  }
  return (
    <div className='container'>
      <h1>Form App</h1>

      <FriendForm
        values={formValues} 
        update={updateForm} 
        submit={submitForm}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
