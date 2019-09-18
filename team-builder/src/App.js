import React, {useState} from 'react';
import './App.css';
import Roster from "./components/Roster";
import NewPlayer from "./components/NewPlayer";

function App() {

 const [player, setPlayer] = useState([
   {
     id: 1,
     name: "Sally Slap",
     email: "2223@yg.com",
     role: "short stop"
   }
 ]);

 const addNewPlayer = player =>{
   const newPlayers = {
     id: Date.now(),
     name: player.name,
     email: player.email,
     role: player.role
   }

   setPlayer([...player, newPlayers]);
 }
  return (

    <div>
      <h1>The Warriors Roster</h1>
      <Roster addNewPlayer= {addNewPlayer} />
      <NewPlayer player={player} />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
