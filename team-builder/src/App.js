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

      <h1>Build Your Team!</h1>

      {members.map((member) => {
        return (
          <div>
            Hello {member.firstName} {member.lastName}!<br/>
            Is {member.email} your correct email? <br/>
            Are you still currently a {member.role}?
          </div>
        );
      })}
      
      <br/>
        
      <form>

        <input
          placeholder="Enter Team Name">

        </input>

      </form>

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
        
        <input
        placeholder="Enter Role">

        </input>

        <input placeholder="Enter Age">

        </input>

      </form>
      
    </div>
  );
}

export default App;
