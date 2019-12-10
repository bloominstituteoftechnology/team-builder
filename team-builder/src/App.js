import React, {useState} from 'react';
import logo from './logo.svg';
import './css/index.css';
import TeamMember from './Components/TeamMember'
import Menu from './Components/Menu'

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
        <nav>
          <Menu />
        </nav>
        <h1>Meet the Team</h1>
      </header>
      <div>
        <TeamMember person={person} />
      </div>
    </div>
  );
}

export default App;
