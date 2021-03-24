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
    const [formValues, setFormValues] = useState(initialFormValue)

    const change = evt => {
        const { name, value } = evt.target
        setFormValues({...formValues, [name]: value})
    }

    const submit = evt => {
        evt.preventDefault()
        const newTeamMember = {
            teamMemberName: formValues.teamMemberName.trim(),
            teamMemberEmail: formValues.teamMemberEmail.trim(),
            teamMemberRole: formValues.teamMemberName.trim(),
        }
    }

    return (
      <div>
        <h1>Team Builder</h1>
        <form onSubmit={submit}>
          <label>
            New Member Name:
            <input name='memberName' type='text' onChange={change} value={formValues.teamMemberName}/>
          </label>
          <br></br>
          <label>
            New Member Email:
            <input name='memberEmail' type='text' onChange={change} value={formValues.teamMemberEmail}/>
          </label>
          <br></br>
          <label>
            New Member Role:
            <input name='memberRole' type='text' onChange={change} value={formValues.teamMemberRole} />
          </label>
          <br></br>
          <br></br>
            <button>Submit</button>
        </form>
        <h2>Meet the Team:</h2>
        {teamMembers.map((member, idx) => {
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