import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState({
    name: props.name,
    email: props.email,
    role: props.roll,
  });

  const handleChanges = (e) => {
    console.log("handle change!", e.target.value);
    //  setNote({name: event.target.value})
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addMember(name);
  };
  console.log("name", name);
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      {/* <label htmlFor='name'>Name</label>; */}
      <input
        id="name"
        type="text"
        placeholder="Enter name"
        value={name.name}
        onChange={handleChanges}
      />
      <input
        id="email"
        type="text"
        placeholder="Enter Email"
        value={name.email}
        onChange={handleChanges}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
