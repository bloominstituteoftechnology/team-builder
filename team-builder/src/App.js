import React, {useState} from 'react';
import logo from './logo.svg';
import {team}  from './Team';
import People from './Components/People';
import './App.css';

function App() {
const [data, setData] = useState(team);
console.log(data);

  return (
    <div>
      <People people={data}/>
    </div>
  );
}

export default App;
