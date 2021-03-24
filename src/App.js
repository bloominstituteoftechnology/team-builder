import './App.css';
import Form from './Form';
import React, { useState } from "react"


function App() {
  const setDefault= {
    name: '',
    email: '',
    role: '',
}
const friendsList = [ 
  { 
    name: 'alex',
    email: 'alextran0899@gmail.com',
    role: 'Lambda Student'
  },
  {
    name: 'face',
    email: 'legit@noemail.com',
    role: 'Student'
  }
]

const [newFriend, setNewFriend] = useState(setDefault)
const [list,setList] = useState(friendsList);
 
const submitHandeler = evt =>{ 
  setList([...list, newFriend])
  evt.preventDefault();
}
const newFriendHandler = evt =>{
  setNewFriend({...newFriend, [evt.target.name]: evt.target.value })
}



  return (
    <div>
    <Form list={list} update={newFriendHandler} submit={submitHandeler}/>    
    {list.map((friend) => <li >Name: {friend.name} Email: {friend.email} Role: {friend.role}</li>)}
    </div>

  );
}

export default App;