import React from 'react';

const Form = props => {
  const defaultState = {
    name: "",
    email: "",
    role: ""
  };

  const [newForm, setNewForm] = React.useState(defaultState);

  const handleChange = event => {
    // console.log(event.target.name);
    console.log(event.target.value);
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setMembers([...props.members, newForm]);
    setNewForm(defaultState);
    console.log("form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={newForm.name}
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        type="text"
        name="email"
        value={newForm.email}
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        type="text"
        name="role"
        value={newForm.role}
        placeholder="Role"
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default Form;