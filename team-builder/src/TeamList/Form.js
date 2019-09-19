import React from 'react';
import styled from 'styled-components';

const TeamStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 50rem;
    border-radius: 2px dashed white;

    button{
      margin-top:1rem;
      padding: 1rem;
      border-radius: 1rem;
      background: green;
      color: white;
    }
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