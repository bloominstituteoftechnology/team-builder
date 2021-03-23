import React, {useState} from 'react';
import {ReactDOM, render} from 'react-dom';


const codeTeam = [
    {
        teamMemberName: 'William Dye' , teamMemberEmail: 'dye@dye.com',
        teamMemberRole: 'Director',
    },
    {
        teamMemberName: 'Daniel Herrera', teamMemberEmail: 'herrera@herrera.com',
        teamMemberRole: 'Head Chef',
    },
    {
        teamMemberName: 'Chloe Dye', teamMemberEmail: 'steeg@steeg.com' ,
        teamMemberRole: 'Professional Steeg',
    }
]

const initialFormValue = {
    teamMemberName: '',
    teamMemberEmail: '',
    teamMemberRole: '',
  }
  
  function TeamForm() {
    const [teamMembers, setTeamMembers] = useState(codeTeam)

    return (
      <div>
        <h1>Team Builder</h1>
        <form>
          <label>
            New Member Name:
            <input name='memberName' type='text'/>
          </label>
          <br></br>
          <label>
            New Member Email:
            <input name='memberEmail' type='text'/>
          </label>
          <br></br>
          <label>
            New Member Role:
            <input name='memberRole' type='text' />
          </label>
        </form>
        <h2>Meet the Team:</h2>
        {codeTeam.map((member, idx) => {
            return (
                <div key={idx}>
                  {member.teamMemberName}, {member.teamMemberRole}, {member.teamMemberEmail}
                </div>
            
            )
        })}
      </div>
    )
      

  }



  export default TeamForm