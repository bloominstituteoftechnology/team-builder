import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import "./App.css";
import "./css/index.css";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [id, setId] = useState(-1);

  const handleSubmit = event => {
    event.preventDefault();
    setData([...data, user]);
    setUser({ name: "", email: "", role: "" });
    setId(id + 1);
  };

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const memberToEdit = (event) => {
    console.log("data from memberToEdit", data);
    console.log(event.target.data);

  };

  return (
    <div className="App">
      <Form
        user={user}
        handleSubmit={event => handleSubmit(event)}
        handleChange={event => handleChange(event)}
        memberToEdit={memberToEdit}
      />

      <List user={user} data={data} memberToEdit={event => memberToEdit(event)} id={id} />
    </div>
  );
}

export default App;
