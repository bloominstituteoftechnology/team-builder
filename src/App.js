import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import "./App.css";
import "./css/index.css";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const [id, setId] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    !active ? setData([...data, user]) : editMember(id, user, data);
    setUser({ name: '', email: '', role: '' });
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const memberToEdit = event => {
    setActive(true);
    setId(event.target.id);
    setUser({ ...user, name: data[id].name, email: data[id].email, role: data[id].role })
  }

  const editMember = (id, user, data) => {
    data[id] = {
      name: user.name, email: user.email, role: user.role
    };
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
