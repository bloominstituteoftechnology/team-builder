import React, { useState } from 'react';
import TeamMemberCard from "./components/TeamMemberCard";
import TeamForm from "./components/TeamForm";

function App() {

  const [teamCards, setTeamCard] = useState([
    {
      id: 1,
      name: 'David Dickerson', 
      email: 'david.dickerson46@gmail',
      role: 'Marketing Strategist'
    }
  ]); 
  const addNewTeamCard = card => {
    const newCard = {
      id: Date.now(),
      name: card.name,
      email: card.email,
      role: card.role,
    };
    setTeamCard([...teamCards, newCard]);
  }

  return (
    <div className="App">
        <TeamForm addNewTeamCard={addNewTeamCard} />
        <TeamMemberCard teamCards={teamCards} />
    </div>
  );
}

export default App;