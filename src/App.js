import React, { useState, useEffect } from "react";
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
  const [input, setInput] = useState("");
  const [server, setServer] = useState(!window.localStorage.getItem('data') ? userData : JSON.parse(window.localStorage.getItem('data')))
  const [data, setData] = useState(server);
  const [active, setActive] = useState(false);
  const [formCollapse, setFormCollapse] = useState(false);
  const [cardCollapse, setCardCollapse] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(server));
    setData(server)
  }, [server])

  const handleSubmit = (event) => {
    event.preventDefault();
    active ? editMember() : setServer([...server, { ...input, id: Date.now() }]);
    handleClear();
  }

  const handleChange = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClear = () => {
    setInput({ name: '', email: '', role: '', teamNumber: '', id: '' });
    setActive(false)
  }

  const memberToEdit = (e) => {
    data.filter(toEdit => {
      return Number(toEdit.id) === Number(e.target.id) ? setInput({ name: toEdit.name, email: toEdit.email, role: toEdit.role, id: toEdit.id, teamNumber: toEdit.teamNumber }) : null;
    })
    setActive(true);
    setFormCollapse(true)
    setCardCollapse(false)
  }

  const removeMember = (e) => {
    setServer(server.filter(s => {
      return s.id != e.target.id
    }))
    handleClear();
    setFormCollapse(false)
  }

  const editMember = () => {
    setServer(prev => {
      return prev.map((member) => {
        return member.id === input.id ? { ...data.member = input } : { ...data.member = member };
      })
    })
  }

  const handleFilter = (e) => {
    const id = e.target.value
    setData(server)
    if (id !== 'all') {
      return setData(server.filter((user) => { return user.teamNumber === id }))
    }
  }

  return (
    <div className="App">
      <StyledApp>
        <Button onClick={() => setFormCollapse(!formCollapse)} color="primary">Form</Button>

        <Collapse isOpen={formCollapse}>
          <Form user={input}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClear={handleClear}
            memberToEdit={memberToEdit}
          />
        </Collapse>

        <Input type="select" style={{ width: '150px', alignSelf: 'flex-end', margin: '20px 100px' }} name="select" onChange={e => handleFilter(e)}>
          <option value="" selected disabled hidden>Filter by Team</option>
          <option value="all" >All</option>
          <option value="1" >1</option>
          <option value="2">2</option>
        </Input>

        <List user={input}
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
