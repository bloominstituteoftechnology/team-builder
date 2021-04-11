
import './App.css';
import hardCodedData from "./data";
import React, { useState } from "react";
import Form from "./components/Form/form";
import Display from "./components/Display/display";

function App() {
  const [data, setData] = useState(hardCodedData);
  console.log(data);

  return (
    <div className="App">
      <Form setter={setData} data={data}/>
      <Display data={data} />
    </div>
  );
}

export default App;
