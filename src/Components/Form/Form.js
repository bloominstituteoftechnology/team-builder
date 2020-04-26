import React from "react";
import { Form as ReactForm, Input, Button, Dropdown } from 'reactstrap'
import styled from 'styled-components'

const StyledForm = styled.div`
  padding: 3% 2%;
`
const styleInputs = {
  marginBottom: '1%',
  border: 'none',
  borderRadius: '0',
  borderBottom: '1px solid #eee',
}

const styleButton = {
  margin: '6px',
  width: '130px'
}

// pattern = '^[A-Za-z]+$'

const Form = (props) => {

  return (
    <StyledForm >
      <ReactForm onSubmit={props.handleSubmit}>
        <Input style={styleInputs} type="text" name="name" value={props.user.name} onChange={props.handleChange} required title="No numeric characters allowed" placeholder="Name" />
        <Input style={styleInputs} type="email" name="email" value={props.user.email} onChange={props.handleChange} required placeholder="Email" />
        <Input style={styleInputs} type="text" name="role" value={props.user.role} onChange={props.handleChange} required placeholder="Role" />
        <Input style={styleInputs} type="select" name="teamNumber" value={props.user.teamNumber} onChange={props.handleChange} required placeholder="Team" >
          <option value="" disabled selected hidden>Choose a Team</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Input>
        <Button style={styleButton} color="primary">Submit!</Button>
        <Button style={styleButton} color="secondary" type="button" onClick={() => props.handleClear()}>Clear</Button>
        <Input type="select" style={{ width: '200px', display: 'inline', float: 'right' }} name="select" onChange={e => props.handleFilter(e)}>
          <option value="" selected disabled hidden>Filter by Team</option>
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </Input>
      </ReactForm>
    </StyledForm>
  );
};

export default Form;
