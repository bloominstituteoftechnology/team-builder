import React, {useState} from 'react';
import logo from './logo.svg';
import './css/index.css';
import TeamMember from './Components/TeamMember'
import Menu from './Components/Menu';
import Form from './Components/Form'

function App() {
  const [person, setPerson] = useState([
    {
        id: 1,
        firstName:'David',
        lastName:'Tennant', 
        email: 'doctorwho@gmail.com',
        role: 'Time Traveler'
    }
]);

  const addPerson = person =>{
    const newPerson ={
      id: Date.now(),
      firstName: '',
      lastName: '',
      email: "",
      role: ""
    };
    const newPersonCollection = [...person, newPerson]
    setPerson(newPersonCollection)
  }
  return (

    <div className="App">
      <header>
        <nav>
          <Menu />
        </nav>
        <h1>Creat Your Team</h1>
      </header>
      <div className='body'>
        <Form addPerson={addPerson}/>
        <TeamMember person={person} />
      </div>
    </div>
  );
}

export default App;
