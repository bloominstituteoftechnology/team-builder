import './App.css';
import React, { useState } from "react"

function App() {

  const [users, setUsers] = useState(
    [
      {"name": "Harry", "role": "point"}, {"name": "Reza", "role": "strategy"}, {"name": "Mike", "role": "support"}, {"name": "Kenta", "role":"support"}
    ])

  return (
    <div className="App">
      <div>
        <h3> Team Members </h3>
        {users.map((user) => {
          return (
            <div>
              <h5>{user.name}</h5>
              <h6>{user.role}</h6>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
