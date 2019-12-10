import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './Components/TeamMember'

function App() {
  const [person, setPerson] = useState([
    {
        id: 1,
        firstName:'Doctor',
        lastName:'Who' 
    }
]);
  return (
    <div className="App">
      <header>
        <h1>Team Member List</h1>
      </header>
      <div>
        <TeamMember person={person} />
      </div>
    </div>
  );
}

export default App;
