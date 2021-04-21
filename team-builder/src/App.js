
import './App.css';
import {useState, useEffect} from 'react';
import Form from './Form';
import FormMembers from './FormMembers';
import TeamMembersForm from './Form';




const initialMember =[
  {
    name : '',
    email : '',
    role : ''
  }
]
function App() {
  const [members,setMembers] = useState(initialMember);

  
const newMember = (newMember) =>{
  setMembers([...members,addMember])
}
  
  return (
    <div className="App">
    <h2>Our Team!!</h2>
    <TeamMembersForm newMember ={newMember}/>
      <FormMembers members ={members}/>
      
    </div>
  );
}

export default App;
