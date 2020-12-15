import "./App.css";
import hardCodedData from "./data";
import React, { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  const [data, setData] = useState(hardCodedData);
console.log(data);
  const changeInputHandler = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    const newPerson = 
    console.log(inputValue);
    console.log(inputName);
    
  }

  return (
    <div className="App">
      <Form addToState={changeInputHandler}/>
      <div>Display</div>
    </div>
  );
}

export default App;
