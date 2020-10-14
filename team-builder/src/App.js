import React, {useState} from 'react';
import './App.css';
import Friends from './Friends'

const listOfFriends = [
  {name: 'Sam', role: 'Student', track: 'web36'},
  {name: 'Jaynee', role: 'Student', track: 'web37'},
  {name: 'Adam', role: 'Student', track: 'web36'},
  {name: 'Matt', role: 'Student', track: 'web36'},
]

function App() {

  return (
    <div className="App">
      <h1>Friends</h1>
    {
      listOfFriends.map((item, ind) => {
       return <Friends data={item} key={ind}/>
      })
    }
     
    </div>
  );
}

export default App;
