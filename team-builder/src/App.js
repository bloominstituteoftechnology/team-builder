import React, {useState} from 'react';
import './App.css';
import Members from "./Members"
import Form from "./Form"


function  App() {
 
 const [members, setMembers] = useState([{
      
  id: 1,
  name: "Sheri",
  email: "sheri@emai.com",
  role: "Front-End"
},

{
  id:2,
  name: "Kevin",
  email: "kevin@email.com",
  role: "UI Dev"

}]);
const addNewMember = member => {
  setMembers([...members, member])
}
  return(
    <div className="App">
    <Members membersProps={members}/>
    <Form addNewMemberProps={addNewMember}/>
    </div>
  ); 
   
}


export default App;
