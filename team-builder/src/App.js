import './App.css';
import Form from './components/Form'
import Employee from './components/Employee'
import React, { useState} from 'react'

const friendsList = [
  {
    name: 'Zachary',
    email: 'thisRandomeemail@yahoo.com',
    role: 'student'
  },
  {
    name: 'kyle',
    email: 'Yooooooo@email.com',
    role: 'teacher'
  },
]

const defaultFriend = {
  name: '',
  email: '',
  role: '',
}

function App() {


const [employee, setEmployee] = useState(friendsList);

// make new friends
const [list, setList] = useState(defaultFriend);

const updateForm = (inputName, inputValue) =>{
  setList({
    ...list, 
    [inputName]: inputValue,
  })
};

const submitForm = () =>{
  const newFriend = {
    name: list.name.trim(),
    email: list.email.trim(),
    role: list.role,
  }

  if (!newFriend.name || !newFriend.email || !newFriend.role) {
    return;
  }
  setEmployee([newFriend, ...employee])
  setList(defaultFriend)
};

  return (
    <div className='container'>
      <h1>List of Team Members</h1>

      <Form 
      list={list} 
      update={updateForm} 
      submit={submitForm}
      />

      {employee.map((friend) => {
        return <Employee key = {friend.id} details={friend} />
      })}
    </div>
  );
}

export default App;