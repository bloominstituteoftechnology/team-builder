import React, {useState} from 'react';
import logo from './logo.svg';
import {team}  from './Team';
import './App.css';

function App() {
const [data, setData] = useState(team);
console.log(data);

  return (
    <div>
      {/* <div>{data}</div> */}
    </div>
  );
}

export default App;
