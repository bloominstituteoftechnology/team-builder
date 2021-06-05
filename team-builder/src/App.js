import { useState, useEffect } from "react";
import "./App.css";
import teamMembers from "./data/data";
import TeamMember from "./Components/TeamMember";
import LoadScreen from "./Components/LoadScreen";
import AddMemberForm from "./Components/AddMemberForm";
import { Typography } from "@material-ui/core";

function App() {
  const [team, setTeam] = useState([]);

  useEffect(() => setTeam(teamMembers), []);

  const onSubmit = (newMember) => {
    setTeam([...team, newMember]);
  };

  //write function to edit team member record
  const update = (memberName, newData) => {
    const { name, email, role } = newData;
    const updatedTeam = team.map((mbr) => {
      if (mbr.name === memberName) {
        mbr.name = name;
        mbr.email = email;
        mbr.role = role;
      }
      return mbr;
    });
    setTeam(updatedTeam);
  };

  return team.length > 0 ? (
    <div className="App">
      <Typography variant="h4" component="h1" className="rainbow-text" >
        Team Members
      </Typography>
      {team.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          email={member.email}
          role={member.role}
          update={update}
        />
      ))}
      <AddMemberForm submit={onSubmit} />
    </div>
  ) : (
    <LoadScreen />
  );
}

export default App;
