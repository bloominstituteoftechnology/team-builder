import "./App.css";
import hardCodedData from "./data";
import React, { useState } from "react";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";

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
