import React from 'react';
import styled from 'styled-components';

// const CharacterStyle = styled.div`
//     display: flex;
//     flex-direction: column;
// `    

function Form (props) {
  const {nameChange, emailChange, roleChange} = props;
  const {name, age, role} = props.teamForm;
    return(
      <div>
      <label htmlFor='nameInput'>Name</label>
      <input id='nameInput' type='text' onChange={nameChange}/>

      <label htmlFor='emailInput'>Email</label>
      <input id='emailInput' type='text' onChange={emailChange}/>

      <label htmlFor='roleInput'>Role</label>
      <input id='roleInput' type='text' onChange={roleChange}/>

      <button> Add </button>
      </div>
    );
}

export default Form;