import React, { useState } from "react";

const AddMemberForm = (props) => {
  const { submit } = props;
  const initialFormValue = {
    name: "",
    email: "",
    role: "",
  };
  const [formValue, setFormValue] = useState(initialFormValue);

  const change = (e) => {
    const { name, value } = e.target;
    setFormValue({...formValue, [name]: value });
  };

  const submitForm = (e) => {
      e.preventDefault();
      submit(formValue)
      setFormValue(initialFormValue)
  }

  const roles = [
    "Front End Engineer",
    "Back End Engineer",
    "Designer",
    "Junior Front End Developer",
    "Omnipotent Unicorn",
    "Wise Old Dragon",
    "Aspiring Sith Master",
  ];

  return (
    <form action="submit" onSubmit={submitForm} >
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="name"
          onChange={change}
          value={formValue.name}
          placeholder='enter name'
        />
        <input
          type="email"
          id="email"
          name="email"
          onChange={change}
          value={formValue.email}
          placeholder='enter email'
        />
        <select name="role" id="role" onChange={change}>
            <option value="">Please choose a role</option>
          {roles.map((role, index) => (
            <option value={`${role}`} key={index}>
              {role}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" >Submit</button>
    </form>
  );
};

export default AddMemberForm;
