import React, {useState} from 'react';
// import logo from './logo.svg';
import {team}  from './Team';
import People from './Components/People';
import Form from './Components/Form';
import './App.css';


function App() {
const [data, setData] = useState(team);
console.log(data);

const addNewPerson = (person) =>{
  const newPerson = {
    name: person.name,
    email: person.email,
    role: person.role
  }
  setData([...data,newPerson])
}

  return (
    <div>
      <People people={data}/>
      <Form addNewPerson = {addNewPerson}/>
    </div>
  );
}

export default App;
