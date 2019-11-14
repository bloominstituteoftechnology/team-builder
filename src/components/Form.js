import React, { useState } from 'react';

const Form = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const newForm = () => {
    setName("");
    setEmail("");
    setRole("");
  }

  return (
    <form onSubmit = {(event) => {
      props.addMember(event, name, email, role)
      newForm()}}>
      <label htmlFor = "name">Name</label>
      <input
        id = "name"
        name = "name"
        type = "text"
        value = {name}
        required
        onChange = {(event) => setName(event.target.value)} />
      <label htmlFor = "email">Email</label>
      <input
        id = "email"
        name = "email"
        type = "email"
        value = {email}
        required
        onChange = {(event) => setEmail(event.target.value)} />
      <label htmlFor = "role">Role</label>
      <input
        id = "role"
        name = "role"
        type = "text"
        value = {role}
        required
        onChange = {(event) => setRole(event.target.value)} />
      <button type = "submit">Submit</button>
    </form>
  );
}

export default Form;