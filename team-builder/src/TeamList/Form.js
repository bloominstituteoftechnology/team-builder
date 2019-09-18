import React from 'react';
import styled from 'styled-components';

const TeamStyle = styled.div`
    display: flex;
    flex-direction: column;
`    

function Form (props) {
  const {nameChange, emailChange, roleChange, formSubmit} = props;
  const {name, email, role} = props.teamForm;

  const isDisabled = () => {
    if (!name || !email || !role) {
      return true;
    }
    return false;
  };
    return(
      <TeamStyle>
      <label htmlFor='nameInput'>Name</label>
      <input id='nameInput' type='text' onChange={nameChange}/>

      <label htmlFor='emailInput'>Email</label>
      <input id='emailInput' type='text' onChange={emailChange}/>

      <label htmlFor='roleInput'>Role</label>
      <input id='roleInput' type='text' onChange={roleChange}/>

      <button onClick={formSubmit} disabled={isDisabled()}> Add </button>
      </TeamStyle>
    );
}

export default Form;