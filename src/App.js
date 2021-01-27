import './App.css';
import React, { useState } from "react"

function App() {

  const [users, setUsers] = useState(
    [
      {"name": "Harry", "email": "argy@bargy.com", "role": "point"}, {"name": "Reza", "email": "argy@bargy.com", "role": "strategy"}, {"name": "Mike", "email": "argy@bargy.com", "role": "support"}, {"name": "Kenta", "email": "argy@bargy.com", "role":"support"}
    ])

  return (
    <div className="App">
      <div>
        <h3> Team Members </h3>
        {users.map((user) => {
          return (
            <div>
              <h5>Name: {user.name}</h5>
              <h6>Role: {user.role}</h6>
              <h6>Email: {user.email}</h6>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
