import React, { useState } from "react";

const Form = props => {

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        email: '',
        occupation: '',
        favFood: ''
    })
  const changeHandler = e => {};
  return (
    <form>
      <label>Name</label>
      <input type="text" placeholder="name" onChange={changeHandler} />
      <label>Age</label>
      <input type="number" onChange={changeHandler} />
      <label htmlFor="">Email</label>
      <input type="text" placeholder="email" onChange={changeHandler} />
      <label htmlFor="">Occupation</label>
      <input type="text" onChange={changeHandler} />
      <label htmlFor="">Favorite Food</label>
      <input type="text" onChange={changeHandler} />
    </form>
  );
};

export default Form;
