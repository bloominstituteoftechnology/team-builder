import React, {useState} from 'react';

const Form = props => {
  const [box, setBox] = useState({
    name: "",
    email: "",
    role: ""
  });
  const handleChanges = e => {
    setBox({
      ...box,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewBox(box);
    setBox({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
        value={box.name}
      />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        type="text"
        placeholder="email"
        onChange={handleChanges}
        name="email"
        value={box.email}
      />
      <label htmlFor="role">Role: </label>
      <input
        id="role"
        type="text"
        placeholder="role"
        onChange={handleChanges}
        name="role"
        value={box.role}
      />
      <button type="submit">Add Team Member</button>
      </form>
  );
};
export default Form;