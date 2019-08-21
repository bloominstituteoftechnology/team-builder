import React, { useState, useEffect } from "react";

const Form = props => {
  const [member, setMember] = useState({name: "", email: "",role: ""});

  useEffect(()=>{
      setMember(props.memberToEdit || {name: "", email: "",role: ""})
  }, [props.memberToEdit])

  const changeHandler = event => {
    console.log(event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    if (props.memberToEdit) {
        props.editMember(member);
    } else {
        const newTeamMember = {
        ...member,
        id: Date.now()
        };
        props.addNewTeamMember(newTeamMember);
        setMember({name: "", email: "",role: ""});
    }
  };
  return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">Full Name:</label>
        <input value={member.name} onChange={changeHandler} type="text" name="name" placeholder='fullname'/>
        <label htmlFor="email">Email:</label>
        <input value={member.email} onChange={changeHandler} type="text" name="email" placeholder="user@example.com"/>
        <label htmlFor="role">Role:</label>
        <input value={member.role} onChange={changeHandler} type="text" name="role" placeholder="Member Role"/>
        <button type="submit">{props.memberToEdit ? 'Save Changes' : 'Add +'}</button>
    </form>
  );
};

export default Form;