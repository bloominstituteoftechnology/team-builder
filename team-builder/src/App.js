import React, {useState} from 'react';
import './App.css';
import Form from './Form'
import Turtle from './Turtle';
function App() {

  const [teamTurtles, setTeamTurtles] = useState([
    {
      name: 'Leonardo',
      email: 'Leo@turtlezahh.com',
      role: 'Leader',
      id: 0,
    },
    {
      name: 'Raphael',
      email: 'Raph@turtlezahh.com',
      role: 'Weapons',
      id: 1,
    },
    {
      name: 'Donatello',
      email: 'Don@turtlezahh.com',
      role: 'Brains',
      id: 2,
    },
    {
      name: 'Michaelangelo',
      email: 'Angelo@turtlezahh.com',
      role: 'Chef',
      id: 3,
    },

  ])

  const addTurtle = inputT => {
    const newTurtle = {
      name: inputT.name,
      email: inputT.email,
      role: inputT.role,
      id: teamTurtles.length,

    }
    setTeamTurtles([teamTurtles]);
    
  }

console.log(teamTurtles);

return (
  <div>
    <Form />
    {
        teamTurtles.map(turtle => {
          return (
            <Turtle key={turtle.id} details={turtle} />
          )
        })
    }
  </div>
);
  }


export default App;
