import React, { useState } from 'react';
import Form from './components/forms/Form'
import Member from './components/members/Member'
import './App.css';

const currentMembers =[
  {name: "Thorin", email: 'AzogSux@chainmail.com', role: 'King'},
  {name: 'Balin', email: 'LordofM0r14@chainmail.com', role: 'Advisor'},
  {name: 'Gandalf', email: 'Tern0fthaTyde@mothmail.com', role: 'Wizard'},
  {name: 'Bilbo', email: 'H8theSackvilles@footmail.com', role: 'Burglar'}

]

function App() {
  const[member, setMember]= useState(currentMembers)
  

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h4>Please Enter Member Information</h4>
      <Form 
        setMember={setMember}
      />


      <h3>Current Members</h3>
          <Member member ={member} />
     
      
    </div>
  );
}

export default App;
