import React, { useState } from 'react';

const Form = props => {
    
 const [note, setNote] = useState({name: ''})

 const handleChanges = event => {
  console.log('handle change!', event.target.value)
  setNote({name: event.target.value})

 } 
console.log('note', note);
return (
 <form>
  <label htmlFor='name'>Name</label>;
     <input 
       id='name' 
       type='text' 
       placeholder='Enter name' 
       onChange={handleChanges} />  
  </form>
 ) 
};

export default Form;