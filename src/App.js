import React, { useState } from "react";
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
    active ? editMember() : setData([...data, { ...user, id: Date.now() }]);
    setActive(false);
    setUser({ name: '', email: '', role: '' });
  }
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const memberToEdit = (e) => {
    data.filter(toEdit => {
      return Number(toEdit.id) === Number(e.target.id) ? setUser({ name: toEdit.name, email: toEdit.email, role: toEdit.role, id: toEdit.id }) : null;
    })
    setActive(true);
  }

  console.log(data);
  const Del = (e) => {
    data.filter(del => {
      return Number(del.id) !== Number(e.target.id) ?
        setData(prev => {
          return { ...data.member }
        }) : null;
    })
  }
  const editMember = () => {
    setData(prev => {
      return prev.map((member) => {
        return member.id === user.id ? { ...data.member = user } : { ...data.member = member };
      })
    })
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
        Del={Del}
      />

    </div>
  );
}

export default App;
