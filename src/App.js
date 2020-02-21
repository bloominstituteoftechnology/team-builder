import React, { useState } from 'react';
import './App.css';
import Form from './form';
import Members from './Members';

function App() {
  const [members,setMembers] = useState([])

  const addMember = member => {
    setMembers([...members,member])
    console.log(members)
  }

  return (
   <div>
     <Form addMember={addMember}/>
     <Members members={members}/> 
   </div>

   

      
   

  );
}

export default App;
