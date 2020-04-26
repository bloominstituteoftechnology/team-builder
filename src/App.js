import React, { useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import userData from './data'
import styled from 'styled-components'
import { Collapse, Button, Input } from 'reactstrap'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`


function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState(userData);
  const [active, setActive] = useState(false);
  const [formCollapse, setFormCollapse] = useState(false);
  const [cardCollapse, setCardCollapse] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    active ? editMember() : setData([...data, { ...user, id: Date.now() }]);
    setActive(false);
    setUser({ name: '', email: '', role: '', teamNumber: '' });
  }
  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleClear = () => {
    setUser({ name: '', email: '', role: '', teamNumber: '', id: '' });
    setActive(false)
  }

  const memberToEdit = (e) => {
    data.filter(toEdit => {
      return Number(toEdit.id) === Number(e.target.id) ? setUser({ name: toEdit.name, email: toEdit.email, role: toEdit.role, id: toEdit.id, teamNumber: toEdit.teamNumber }) : null;
    })
    setActive(true);
    setFormCollapse(true)
    setCardCollapse(false)
  }

  const removeMember = (e) => {
    setData(data.filter((del) => {
      return Number(del.id) !== Number(e.target.id);
    }))
    setUser({ name: '', email: '', role: '', teamNumber: '' });
    setFormCollapse(false)
  }

  const editMember = () => {
    setData(prev => {
      return prev.map((member) => {
        return member.id === user.id ? { ...data.member = user } : { ...data.member = member };
      })
    })
  }

  const handleFilter = (e) => {
    console.log(e.target.value);
    const id = e.target.value
    setData(userData)
    if (id !== 'all') {
      setData(userData.filter((user) => { return user.teamNumber === id }))
    }
  }

  return (
    <div className="App">
      <StyledApp>
        <Button onClick={() => setFormCollapse(!formCollapse)} color="primary">Form</Button>

        <Collapse isOpen={formCollapse}>
          <Form user={user}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClear={handleClear}
            memberToEdit={memberToEdit}
          />
        </Collapse>

        <Input type="select" style={{ width: '150px', alignSelf: 'flex-end', margin: '20px 100px' }} name="select" onChange={e => handleFilter(e)}>
          <option value="" selected disabled hidden>Filter by Team</option>
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Input>

        <List user={user}
          data={data}
          removeMember={removeMember}
          setCardCollapse={setCardCollapse}
          cardCollapse={cardCollapse}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleClear={handleClear}
          memberToEdit={memberToEdit}
        />

      </StyledApp>
    </div>
  );
}

export default App;
