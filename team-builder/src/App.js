import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form.js';
import { Route, Link } from 'react-router-dom';

function App() {
  const [people, setPeople] = useState([
    {id: 0, name: 'Magic', email: 'magic32@ll.com', role: 'PG'},
    {id: 1, name: 'Kareem', email: 'captain33@ll.com', role: 'C'},
  ]);

  const addPerson = person => {
    setPeople([...people, {...person, id: Date.now()}]);
  };


  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>
      <Route path="/add"
             render={props => <Form {...props}
                                    submitPerson={addPerson}
                                    buttonText="Add Person" 
                              />}/> 
    </div>
  );
}

export default App;
