import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import List from './component/list'
import ListOfMember from './component/ListOfMember'
function App() {


  const [teamMembers, setteamMembers] = useState([{
    name: 'ehsan',
    lastName: 'rahimi',
    email: 'ehsan@gmail.com',
  }]
  );

  const addNewMembers =(members) => {
const newMembers = {
  id: Date.now(),
  name: members.name,
  lastName: members.lastName,
  email: members.email,

}
setteamMembers({...teamMembers,newMembers})

  }



  return (
    <div className="App">
      <h1>team members</h1>
      <ListOfMember addNewMembers= {addNewMembers}/>
      
      <List teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
