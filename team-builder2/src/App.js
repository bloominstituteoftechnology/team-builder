import React, { useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import Display from "./components/Display";

function App() {
  const [team, setTeam] = useState([]);

  const teamChange = newMember => {
    setTeam([...team, newMember]);
  };

  return (
    <div className="App">
      <h1>Join The Team</h1>
      <Forms teamAdd={teamChange} />

      <h2>Meet Your Team!</h2>
      <div>
        {team.map((member, index) => (
          <Display key={index} newMember={member} />
        ))}
      </div>
    </div>
  );
}

export default App;
