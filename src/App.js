import React, { useState, useEffect, useRef } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import "./App.css";
import "./css/index.css";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);

  const handleSubmit = (event, id) => {
    event.preventDefault();
    active ? editMember() : setData([...data, { ...user, id: data.length }]);
    setActive(false);
    setUser({ name: '', email: '', role: '' });
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const memberToEdit = (e) => {
    const id = e.target.id;
    setUser({ name: data[id].name, email: data[id].email, role: data[id].role })
    setActive(true);
  }
  // useEffect(memberToEdit, [memberToEdit])
  const editMember = (id) => {
    console.log({ ...user });
  }

  return (
    <div className="App">
      <Form user={user}
        handleSubmit={event => handleSubmit(event)}
        handleChange={event => handleChange(event)}
        memberToEdit={memberToEdit}
      />
      <List user={user}
        data={data}
        memberToEdit={memberToEdit}
      />

    </div>
  );
}

export default App;
