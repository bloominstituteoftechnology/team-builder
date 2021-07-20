import React, { useState, } from 'react'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'
import './App.css';


const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

const starterFriends = [
  {username: 'Rick Mansfield', 
  email: 'RicksMyCodeGuy@gmail.com', 
  role: 'Frnotend Engineer' }
]
export default function App() {
  const [friends, setFriends] = useState(starterFriends) 
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
    setFriends([...friends, newFriend])
    setFormValues(initialFormValues)
  }
  return (
    <div className='container'>
      <h1>Team App</h1>

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
