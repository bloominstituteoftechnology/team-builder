import React, {useState} from 'react';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      {teamMembers.map(member => 
        <p>Show Member's Information</p>
      )}
    </div>
  );
}

export default App;
