import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import TeamForm from "./components/TeamForm" 
import Team from "./components/Team"
import Data from "./data"

function App() {

const [form, setForm] = useState(Data) 

const addNewUser = users => {
  setForm([...form, users]);
};
  
  return (
    <div className="App">
      <header className="App-header">
       <div className="App">
         <TeamForm addNewUser={addNewUser}/>        
         <Team formData={form}/>
       </div>
      </header>
    </div>
  );

}

export default App;