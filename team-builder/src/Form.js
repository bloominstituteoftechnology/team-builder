
import React from 'react';

const Form = props => {
  const [teamMember, setTeamMember] = useState ({
    name: "",
    email: "",
    role: "",
    });
    
    const handleChanges = e => {
      setTeamMember({
        ...teammate,
        [e.target.neame]: e.target.value
        });
        console.log(e.target.value);
    };
    const submitForm = e => {
      e.preventDefault();
      props.addTeamMember(teammate);
      setTeamMember({name:"", email:"", role:""})
    };
    
return (
  <form onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
    <input

      type="text"
      placeholder="Enter Name"
      onChange={handleChanges}
      name="name"
      value={teammate.name}
    />
    <label htmlFor="email">Email</label>
    <input
      type ="text"
      placeholder ="Enter E-Mail"
      onChange ={handleChanges}
      name="email"
      value={teammate.email}
    />
    <label htmlFor="role">Role</label>
    <input
      type="text"
      placeholder="What's your role?"
      onChange ={handleChanges}
      name="role"
      value={teammate.role}
    />



    <button type="submit">Add Teammate</button>
  </form>
);
};

  export default Form;