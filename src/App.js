import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import "./App.css";
import "./css/index.css";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [id, setId] = useState();

  const handleSubmit = event => {
    console.log(id);
    event.preventDefault();
    !active ? setData([...data, user]) : setData([...data, user]);
    setUser({ name: '', email: '', role: '' });
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const memberToEdit = event => {
    setActive(true);
    setId(event.target.id);
    const change = data[event.target.id]
    setUser({ ...user, name: change.name, email: change.email, role: change.role })
  }

  return (
    <div className="App">
      <Form user={user}
        handleSubmit={event => handleSubmit(event)} handleChange={event => handleChange(event)}
        memberToEdit={event => memberToEdit(event)} />

      <List user={user}
        data={data}
        memberToEdit={event => memberToEdit(event)}
      />

    </div>
  );
}

export default App;
