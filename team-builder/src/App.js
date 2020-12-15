import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const teamList = []


const initialTeamName = { teamName:''}

const initialTeamInfo = [{ 
  firstName:'Jacob',
  lastName:'Stephens',
  email:'jacobstephens.work@gmail.com',
  role:'Student',
}]



function App() {

  const [members, setMembers] = useState(initialTeamInfo);
  const [teamName, setTeamName] = useState(initialTeamName)

  return (

    <div>

      <h1>Current Team</h1>

      {members.map((member) => {
        return (
          <div>
            Name: {member.firstName} {member.lastName}<br/>
            Email: {member.email}<br/>
            Role: {member.role}
          </div>
        );
      })}
      
      <br/>

      <h1>Add Team Member Below</h1>

      <form>

        <input
          placeholder="Enter First Name">

        </input>

        <input
          placeholder="Enter Last Name">

        </input>

        <input
        placeholder="Enter Email">

        </input>
        
        <select>
          <option>-----Select Role-----</option>

          <option>Instructor</option>

          <option>Student</option>

          <option>Web Developer</option>
          
          <option>Faculty Member</option>
        </select>

      </form>
      
    </div>
  );
}

export default App;
