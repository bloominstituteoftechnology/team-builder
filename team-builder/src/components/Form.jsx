import React, { useState } from "react";

const Form = props => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    email: "",
    occupation: "",
    favFood: ""
  });
  const changeHandler = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        placeholder="name"
        onChange={changeHandler}
        value={formState.name}
        name="name"
      />
      <label>Age</label>
      <input
        type="number"
        onChange={changeHandler}
        value={formState.age}
        name="age"
      />
      <label htmlFor="">Email</label>
      <input
        type="text"
        placeholder="email"
        onChange={changeHandler}
        value={formState.email}
        name="email"
      />
      <label htmlFor="">Occupation</label>
      <input
        type="text"
        onChange={changeHandler}
        value={formState.occupation}
        name="occupation"
      />
      <label htmlFor="">Favorite Food</label>
      <input
        type="text"
        onChange={changeHandler}
        value={formState.favFood}
        name="favFood"
      />
    </form>
  );
};

export default Form;
