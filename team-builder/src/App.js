import React, { useState } from 'react'
import MemberForm from './MemberForm'
import Members from './Members'

function App() {
  const [ members, setMembers ] = useState([
    {
      username: "Shawn",
      email: "shawn2776@gmail.com",
      role: "Frontend Developer"
    }
  ]);

  const addMember = (newMember) => {
    setMembers([...members, newMember])
  }

  return (
    <div className="container">
      <h2>Member Form</h2>
      <MemberForm addMember={addMember}/>
      <h2>Members</h2>
      <Members members={members}/>
    </div>
  )
}

export default App;