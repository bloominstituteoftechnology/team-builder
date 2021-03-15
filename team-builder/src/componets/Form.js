import React, { useState } from 'react'
import {render} from 'react-dom'
import App from '../App'


function Form(){

   const teamList = [
    {
        teamName:'Ben Schinn',
        teamEmail: 'benschinn865@lamdaschool.com'

    },
    {
        teamName:'Jessica Duell',
        teamEmail: 'jessduell887@lamdaschool.com'
    }
]

function TeamForm() {
    const [team, setTeam] = useState(teamList)
    const [teamName, setTeamName] = useState('')
    const [teamEmail, setTeamEmail] = useState('')
    const  defaultPetState = { teamName:'', teamEmail:'' } 
    const [newTeam, setNewTeam] = useState(defaultPetState)

    const teamHandeler = event =>{ console.log(event.target.name, event.target.value ) 
         
    setNewTeam({...newTeam, [event.target.name]: event.target.value})
    
    }

    const submitHandler = event => {
        console.log('Submit')
        setTeam([...team, {teamName, teamEmail}])
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input name="teamName" onChange={teamHandeler} type="text" placeholder="Name"/>
                <input name="teamEmail" onChange={teamHandeler} type="text" placeholder="Email"/>
                <input  type='submit' value='submit' />
            </form>

        <ul>
            {team.map((team, i) => <li key={i}> The TeamMemeber is {team.teamName} and can be reach at {team.teamEmail}</li>)}
        </ul>

        </div>
    )
}
    render(
        <>
          <TeamForm />
          {/* <App /> */}
        </>
        , document.querySelector('#root')
      )
 
}



export default Form;