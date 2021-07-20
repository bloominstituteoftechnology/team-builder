import React, { useState, } from 'react'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm'
import styled from  'styled-components';
import './index.css';


const Wrapper = styled.div`
    h1 .container{
        font-family: 'Chelsea Market', cursive;
        font-size: 2rem;
        color: black;
        padding-left: 2%;
        
    }
    h2 .container{
    font-family: 'Chelsea Market', cursive;
    font-size: 4rem;
	color: black;
	padding-left: 2%;
}
`;

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

const starterFriends = [
  {username: 'Rick Mansfield', 
  email: 'RicksMyCodeGuy@gmail.com', 
  role: 'Frontend Engineer' }
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
      <Wrapper>
      <FriendForm
        values={formValues} 
        update={updateForm} 
        submit={submitForm}
      />
      </Wrapper>
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
