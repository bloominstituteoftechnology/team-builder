import React, { useState } from 'react';

const Form = props => {
    const initialState = {  name: "",  email: "",  role: "",};
    const [teamMember, setTeamMember] = useState(initialState);

const handleChange = event => {
  setTeamMember({ ...teamMember, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
debugger
    if(!teamMember.name || !teamMember.email) {
    alert("Please fill out both fields!");
} else {
    props.setTeamMember( teamMember );
    setTeamMember({ name: "", email: "", role: ""  })
}
  };
  

const resetForm = () => {
    setTeamMember(initialState);
};

return (
    <form onSubmit={event => handleSubmit(event)}>
    <div className="Form">
    <label>
      Name
      <br />
      <input
      type="text"
      name="name"
      value={teamMember.name}
      onChange={event => handleChange(event)}
        />
      <br />
    </label>
    <label>
      Email
      <br />
      <input 
      type="email"
      name="email"
      value={teamMember.email}
      onChange={event => handleChange(event)}
       />
      <br />
    </label>
    <label>
      Role
      <br />
      <select name="role" onChange={event => handleChange(event)}>
        <option value="">Choose your role</option>
        <option value="Full Stack">Full Stack Designer</option>
        <option value="Front End">Front End Designer</option>
        <option value="Back End">Back End Designer</option>
        <option value="Designer">UX/UI Designer</option>
      </select>
    </label>
    </div>

    <input type="submit" value="Submit" />
  </form>
);
};

export default Form