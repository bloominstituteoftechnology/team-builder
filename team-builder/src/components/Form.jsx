import React, { useState, useEffect } from "react";

const Form = props => {
  const [formState, setFormState] = useState({
    name: "",
    age: "",
    email: "",
    occupation: "",
    favFood: ""
  });
  useEffect(() => setFormState(props.edit.member), [props.edit]);
  const changeHandler = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const addMember = e => {
    e.preventDefault();
    const id =  props.members.length === 0 ? 0 : props.members[props.members.length -1].id + 1

    props.addMember({...formState, id});
  };
  return (
    <form onSubmit={addMember} className="member-form">
        <legend><h2>Member Info</h2></legend>
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
        placeholder="age"
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
        placeholder="occupation"
        onChange={changeHandler}
        value={formState.occupation}
        name="occupation"
      />
      <label htmlFor="">Favorite Food</label>
      <input
        type="text"
        placeholder="favorite food"
        onChange={changeHandler}
        value={formState.favFood}
        name="favFood"
      />
      <button>ADD</button>
    </form>
  );
};

export default Form;
