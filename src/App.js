import React, { useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import userData from './data'
import styled from 'styled-components'
import { Collapse, Button } from 'reactstrap'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState(userData);
  const [active, setActive] = useState(false);
  const [collapse, setCollapse] = useState(false);

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
    setCollapse(true)
  }

  const removeMember = (e) => {
    setData(data.filter((del) => {
      return Number(del.id) !== Number(e.target.id);
    }))
    setUser({ name: '', email: '', role: '', teamNumber: '' });
    setCollapse(false)
  }

  const editMember = () => {
    setData(prev => {
      return prev.map((member) => {
        return member.id === user.id ? { ...data.member = user } : { ...data.member = member };
      })
    })
  }

  const handleCollapse = () => {
    setCollapse(!collapse);
  }

  return (
    <>
      <StyledApp>
        <Button onClick={() => handleCollapse()} color="primary">Form</Button>
        <Collapse isOpen={collapse}>
          <Form user={user}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClear={handleClear}
            memberToEdit={memberToEdit}
          />
        </Collapse>

        <List user={user}
          data={data}
          memberToEdit={memberToEdit}
          removeMember={removeMember}
        />
      </StyledApp>
    </>
  );
}

export default App;
