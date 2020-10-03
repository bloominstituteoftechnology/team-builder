import React, { useState } from 'react';
import List from './Components/List';
import Form from './Components/Form';

import './App.css';


function App() {
  const names = [{name: 'James Smith', email: 'James@Jiggly.com', role: 'President'},{name: 'Michael Smith', email: 'Michael@Jiggly.com', role: 'Underling'}, {name: 'Robert Smith', email: 'Robert@Jiggly.com', role: 'Warlock'}];

  const [list, setList] = useState(names);

  const Sub = (newData) => {
    setList([...list, newData])
  };

  return (
    <div className="App" >
      <Form newData = {Sub}/>
      <List people = {list} />
    </div>
  );
}

export default App;
