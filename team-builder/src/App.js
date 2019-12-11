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
        firstName:'Doctor',
        lastName:'Who' 
    }
]);

  const addPerson = person =>{
    const newPerson ={
      id: Date.now(),
      firstName: '',
      lastName: ''
    }
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
        <Form />
        <TeamMember person={person} />
      </div>
    </div>
  );
}

export default App;
