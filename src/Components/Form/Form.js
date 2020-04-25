import React from "react";
import { Form as ReactForm, Input, Button } from 'reactstrap'
import styled from 'styled-components'

const StyledForm = styled.div`
  width: 40%;
  padding: 3% 2%;
`
const styleInputs = {
  marginBottom: '3%'
}

const Form = (props) => {
  return (
    <StyledForm>
      <ReactForm onSubmit={props.handleSubmit}>
        <Input style={styleInputs} type="text" name="name" value={props.user.name} onChange={props.handleChange} required pattern='^[A-Za-z]+$' title="No numeric characters allowed" placeholder="Name" />
        <Input style={styleInputs} type="email" name="email" value={props.user.email} onChange={props.handleChange} required placeholder="Email" />
        <Input style={styleInputs} type="text" name="role" value={props.user.role} onChange={props.handleChange} required placeholder="Role" />
        <Button>Submit!</Button>
      </ReactForm>
    </StyledForm>
  );
};

export default Form;
