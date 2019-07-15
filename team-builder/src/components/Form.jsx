import React, { useState, useEffect } from "react";

const Form = props => {
  const [formState, setFormState] = useState(
    props.edit.edit
      ? props.edit.member
      : {
          name: "",
          age: "",
          email: "",
          occupation: "",
          favFood: ""
        }
  );
  const changeHandler = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const addMember = e => {
    e.preventDefault();
    props.addMember(formState);
  };
  console.log("formstate", formState, "editfromProps", props.edit);
  return (
    <form onSubmit={addMember}>
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
      <button>ADD</button>
    </form>
  );
};

export default Form;
