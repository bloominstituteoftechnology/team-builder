import React, {useState} from 'react';
import TeamList from './TeamList';
import Form from './Form';
import './App.css'

function App() {

  const [people, setPeople] = useState([
    {
    id: 1,
    name: `Danny Worsnop`,
    email: `Worsnop@SpeechGrammarList.com`,
    role: `Singer`
    }
  ]);

  const addNewPerson = character => {
    const newPeople = {
      id: Date.now(),
      name: character.name,
      email: character.email,
      role: character.role
    };
    setPeople([...people, newPeople])
  }

  return (
    <div className="App">
      <h1>The Band</h1>
      <Form addNewPerson={addNewPerson}/>
      <TeamList people={people}/>
    </div>
  )
}

export default App;

