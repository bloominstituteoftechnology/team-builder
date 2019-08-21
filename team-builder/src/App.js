import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import { TeamData}  from './TeamData.js';
import Form from "../src/Form.js";



function App() {
  const [people, setPeople] = useState (TeamData
    // {Name: "Kelly", Occupation: "student"}
  );
console.log(people);
  return (
    <div className="App">

<div className="Form">
      <Form />
      </div>

      <div className="Friends">      
      {people.map (person => <Card {...person} />)}
      </div>

      
      
    </div>
  );
}


export default App;
