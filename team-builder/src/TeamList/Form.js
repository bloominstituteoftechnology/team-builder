import React from 'react';
import styled from 'styled-components';

// const CharacterStyle = styled.div`
//     display: flex;
//     flex-direction: column;
// `    

export default function Form () {
    return(
      <div>
      <label htmlFor='nameInput'>Name</label>
      <input id='nameInput' type='text'/>

      <label htmlFor='emailInput'>Email</label>
      <input id='emailInput' type='text'/>

      <label htmlFor='roleInput'>Role</label>
      <input id='roleInput' type='text'/>

      <button> Add </button>
      </div>
    );
}