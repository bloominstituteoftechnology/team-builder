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

  const removeMember = (e) => {
    setData(data.filter((del) => {
      return Number(del.id) !== Number(e.target.id);
    }))
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
      <Button onClick={() => handleCollapse()}>Form</Button>
      <StyledApp>
        <Collapse isOpen={collapse}>
          <Form user={user}
            handleSubmit={event => handleSubmit(event)}
            handleChange={event => handleChange(event)}
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
