import React, {useState} from 'react';

import './App.css';
import Card from './components/Card.js';
import { TeamData}  from './TeamData.js';
import Form from "../src/Form.js";



function App() {
  const [people, setPeople] = useState (TeamData
    // {Name: "Kelly", Occupation: "student"}
  );

  function addPerson (person) {

    setPeople([...people, person])

  }


console.log(people);
  return (
    <div className="App">

      <Form setPeople={setPeople} />    

            <div className="card">      {people.map (person => <Card {...person} />)}    </div>
 

      
      
    </div>
  );
}


export default App;
