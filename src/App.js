import './App.css';
import React, { useState } from "react"

function App() {

  const [users, setUsers] = useState(
    [
      {"name": "Harry", "role": "point"}, {"name": "Reza", "role": "strategy"}, {"name": "Mike", "role": "support"}, {"name": "Kenta", "role":"support"}
    ])
    
  return (
    <div className="App">
    </div>
  );
}

export default App;
