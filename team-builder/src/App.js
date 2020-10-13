import React, { useState } from 'react';
import ReactDOM, {render} from 'react-dom'
import Form from './Form'
import './App.css';
import CardMaker from './CardMaker'



function App() {
  const [teammates, setTeammates] = useState([])
  const [formData, setFormData] = useState({
    name: "", email: "", age: "",
  })

  const onValueChange = evt => {
    setFormData({
      ...formData,
      [evt.target.name] : evt.target.value, id:teammates.length + 1
    })
  }

  const onSubmit = evt => {
    evt.preventDefault();
    setTeammates([...teammates, formData])
  }


  return (
    <div className="App">
        
          <Form teammates={teammates} change={onValueChange} submit={onSubmit}/>
          {teammates.map(mate => {
      return <CardMaker teammate={mate}/>
    })}
         
    </div>

   
  );
}

export default App;
