
import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Form'
import FriendCard from './FriendCard'
import { v4 as uuid } from 'uuid'

const initialFormValue =  {
  name: '',
  email: '',
  roll: '',
}

function App() {

  const [friends, setFriend] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValue)
  const updateForm = (inputName , inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () =>{
    const newFriend ={
      id: uuid(),
      friendName: formValues.friendName.trim(),
      email: formValues.email.trim(),
      roll: formValues.roll.trim(),
    }

    if (!newFriend.friendName || !newFriend.email || !newFriend.roll){
      return;
    }

    setFriend([...friends, newFriend])

    setFormValues(initialFormValue)
  }

  const memberToEdit = (e) => {
    
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Will you be my friend?!</h1>
      </header>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        friends.map(friend => {
          return (
            <FriendCard key={friend.id} details={friend} update={memberToEdit}/>
          )
        })
      }
    </div>
  );
}

export default App;
