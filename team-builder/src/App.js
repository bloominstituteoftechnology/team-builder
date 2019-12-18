import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Team from "./Components/Team";

function App() {
  const [team, setTeam] = useState([//holding user data(teammate) each is a seperate object in the array
    {
      id: Date.now(),
      username: "Wesley",
      email: "wgm3190@gmail.com",
      role: "The new guy"
    }
  ]);

  // const addNewTeammate = Teammate => {
  //   const newTeammate = {
  //     id: Date.now(),
  //     name: Teammate.username,
  //     email: Teammate.email,
  //     role: Teammate.role
  //   };
  //   setTeam([...team, newTeammate]);
  // };

  return (
    <div className='App'>      
      <h1>Purple Parrots</h1>
      <form>
        <input type='search' value={team.filterValue} />
      </form>
      <Form setTeam={setTeam} team={team} />

      <div className="team">
        <Team team={team} />        
      </div>

      
    </div>
  );
}

export default App;
