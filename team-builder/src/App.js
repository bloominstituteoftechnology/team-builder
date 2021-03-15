import React, {useState} from "react";
import './App.css';
import MemberForm from './components/MemberForm'
import Members from './components/Members';


export function App() {
  const [members, setMembers] = useState ([])
  const addMember=(newMember)=> {
    setMembers(
      [...members, newMember]
    )
  }
  console.log(members)

  return (
    <div className="container"> 
    <MemberForm addMember={addMember}
    />
    <Members members={members}/>
    </div>
  )
 };

export default App;
