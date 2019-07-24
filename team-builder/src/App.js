import React from "react";
import { useState } from "react";
import Form from "./Form.js";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
