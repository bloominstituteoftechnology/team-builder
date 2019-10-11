import React, {useState} from 'react';
import './App.css';

import Form from './components/Form';

function App() {
  const [member, addMember] =useState([{
    name: "Daniel Sockness",
    email: "me@daniels.me",
    role: "Full Stack Web Developer"
}])

const [memberToEdit, setMemberToEdit] = useState({
  name: "",
  email: "",
  role: ""
})

const handleEdit = (event) => {
  setMemberToEdit(member[event.target.value]);
}
  return (
    <div className="App">
      <h1>Build Your Team!</h1>
     <Form addMember={addMember} member={member} memberToEdit={memberToEdit} />
     <div className="team">
     {member.map((item, index) => {
       return (
         <div className="team-card" key={index} >
           <h2>{item.name}</h2>
           <p>{item.email}</p>
           <p>{item.role}</p>
           <button value={index} onClick={handleEdit}>Edit</button>
        </div>
       )
     })}
     </div>
    </div>
  );
}

export default App;