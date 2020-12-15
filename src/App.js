import React, { useState } from 'react'
import Form from './components/Form'
import './App.css';
//import crew from './DummyData.js'
import Main from './Team'
function App() {
  

    const [people, setPeople] = useState([]) // CREAGING A STATE OF PEOPlE TO BE  EQUAL TO  AN EMPTY ARRAY THAT WILL HOLD ALL THE TEAM

    const newForm = (persons) => {
      const newMember = {
        name: persons.name,
        email: persons.email,
        role: persons.role
      } 
      setPeople([...people, newMember])}
        // FUNCION THAT CREATES A NEW FORM and makes it equal to the persons info, AND WHEN CREATED IT WILL MAKE A NEW ARRAY WITH THE CHANGED DATA

    return (
      <div>
          <div className="header">
         <Form newForm={newForm}/>
          </div>

          <div>
      <Main team={people} />
          </div>
      </div>
    );
  } // RETURNING THE FORM WITH ITS PARAMS
export default App;
