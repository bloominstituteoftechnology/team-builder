import React, { useState, useEffect, useRef } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import "./App.css";
import "./css/index.css";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setData([...data, { ...user, id: data.length }])
    setUser({ name: '', email: '', role: '' });
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const memberToEdit = (e) => {
    const id = e.target.id;
    setUser({ name: data[id].name, email: data[id].email, role: data[id].role })
  }


  return (
    <div className="App">
      <Form user={user}
        handleSubmit={event => handleSubmit(event)}
        handleChange={event => handleChange(event)}
      />
      <List user={user}
        data={data}
        memberToEdit={memberToEdit}
      />

    </div>
  );
}

export default App;
