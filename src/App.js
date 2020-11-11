import './App.css';
import React, {useEffect, useState} from 'react';
import Team from './Team';

function App(props) {
  //---------------------------------------------------------
  //Create the data for the team
  const teamData = [
    {id: 1, name: 'Adham'},
    {id: 2, name: 'Wael' },
    {id: 3, name: 'Mohamed'},
    {id: 4, name: 'Ahmed'},
  ];

  
  //Declare a new slice state for the team data
  const [team, setTeam] = useState([]);

  //---------------------------------------------------------
    //Initial values for the form
  // const initialFormValues = {
  //   id: null,
  //   name: ''
  // }

  //   const [form, setForm] = useState(initialFormValues);

  //---------------------------------------------------------

  useEffect (() => {
    const initializeTeam = () => { 
      setTeam (teamData);
    }
    initializeTeam()
  }, []);
  
  
  console.log(team);
  

  return (
    <div className="App">
      <div className='home-header'>
        <h1> Team Overview </h1>
      </div>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Team team={team} />
    </div>
  );
}



export default App;
