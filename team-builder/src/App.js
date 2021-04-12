import { useState, useEffect } from "react";
import "./App.css";
import teamMembers from "./data/data";
import TeamMember from "./Components/TeamMember";
import LoadScreen from "./Components/LoadScreen";

function App() {
  const [team, setTeam] = useState([]);

  useEffect(() => setTeam(teamMembers), []);

  return team.length > 0 ? (
    <div className="App">
      <h1>Team Members</h1>
      {team.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          email={member.email}
          role={member.role}
        />
      ))}
    </div>
  ) : (
    <LoadScreen />
  );
}

export default App;
