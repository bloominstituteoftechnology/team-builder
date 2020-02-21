import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Team from './Team';

function App() {
  const [teamMember, setTeamMember] = useState([{
    id: 1,
    name: "Bunni Butterfly",
    email: "BBFly216@flyaway.com",
    role: "Trainer",
    
    id: 2,
    name: "Samantha Appleseed",
    email: "SammiApples@appleseed.com",
    role: "Trainee",

    id: 3,
    name: "John Snow",
    email: "JSnowman321@mymail.com",
    role: "Trainee",

    id: 4,
    name: "Sonny Bright",
    email: "BrightLight@sunmail.com",
    role: "Trainee",

    id: 5,
    name: "Patti Pineapple",
    email: "FruitLoopPatti@fruitmail.com",
    role: "Trainee",

  }]);

    const addTeamMember = teammate => {
      const newTeammate = {
        id: Number.now(),
        name: teammate.name,
        email: teammate.email,
        role: teammate.role,
      };
      setTeamMember ([...teammate, newTeammate]);
    };

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addTeamMember={addTeamMember}/>
      <Team teammate={teammate}/>
    </div>
  );
}

export default App;
