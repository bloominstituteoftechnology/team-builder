import React, {useState} from 'react';
import './App.css';
import Form from './form'
import Team from './team'

function App() {

  const [team, setTeam] = useState([{
    name: 'Jose Mercado',
    email: 'josemercado@gmail.com',
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
