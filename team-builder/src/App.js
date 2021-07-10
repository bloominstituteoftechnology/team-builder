import React, {useState} from 'react';
import './App.css';
import Form from './form'
import Team from './team'

function App() {

  const [team, setTeam] = useState([{
    name: 'Jose Mercado',
    email: 'josemercado@gmail.com',
    //wanted to see how adding phone numbers worked in forms, so i did it instead of a role. hope it isnt a big deal
    number: '123-456-7899',
  }]);

  const addTeamMember = (teamate)=>{
  setTeam([...team, teamate])
  }

  return (
    <div>
      <Form addTeamMember={
        (teammate)=>addTeamMember(teammate)
        } />


      <Team team={team}/>

      <form><button>reset</button></form>
    </div>
  )
}

export default App;
