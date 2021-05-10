import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'





function App() {

  const teamList = [
    {memberName: 'Zach', email: 'zachattack@zach.com', role: 'Cyber Security'},
    {memberName: 'Lacey', email: 'laceupyourshoes@lacey.com', role: 'Designer'},
    {memberName: 'Wesley', email: 'thewesfriendever@wesley.com', role: 'Backend Engineer'},
  ]

  const [teamMembers, setTeamMembers] = useState(teamList)


 function submitHandler(member) {
   const memNameVal = document.getElementById('name')
   const memEmailVal = document.getElementById('email')
   const memRoleVal = document.getElementById('role')


   const newMember = {
     memberName: memNameVal.value,
     email: memEmailVal.value,
     role: memRoleVal.value,
   }

   setTeamMembers([...teamMembers, newMember])

   memNameVal.value = ''
   memEmailVal.value = ''
   memRoleVal.value = ''

 }

  return (
    <div className="App">
      {teamMembers.map((member) => {
        return <p>Name: {member.memberName} Email: {member.email} Role: {member.role}</p>
      })}

<form>
  <label>
    Name:
    <input id='name' type='text'/>
  </label>

  <label>
    Email:
    <input id='email' type='text'/>
  </label>

  <label>
    Role:
    <input id='role' type='text'/>
  </label>
</form>

<button onClick={submitHandler}>Submit</button>

    </div>
  );
}

export default App;

