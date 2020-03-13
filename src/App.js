import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import "./App.css";
import "./css/index.css";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    setData([...data, { ...user, id: data.length }])
    setUser({ name: '', email: '', role: '' });
  }

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const memberToEdit = (event) => {
    console.log(event.currentTarget);
    console.log("hi");
  }

  return (
    <div className="App">
      <Form user={user}
        handleSubmit={event => handleSubmit(event)} handleChange={event => handleChange(event)}
        memberToEdit={event => memberToEdit(event)} />

      <List user={user}
        data={data}
        memberToEdit={(event) => memberToEdit(event)}
      />

    </div>
  );
}

export default App;
