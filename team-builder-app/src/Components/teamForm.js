import React, { useState, useEffect } from 'react';

function TeamForm(props) {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "",
  })
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
  })



  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submitHandler formState", formState)
    console.log("teamArray", props.teamArray)
    props.setTeamArray([
      ...props.teamArray,
      formState
    ])
    setFormState({
      name: "",
      email: "",
      role: "",
    })
  //   console.log(teamArray)
  };

  const changeHandler = event => {
    console.log("formState", formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    console.log("useEffect MTE", props.memberToEdit)
    setMember({
      name: member.name,
      email: member.email,
      role: member.role,
    })
  }, [props.memberToEdit] );

  return (
    <div className="form-wrap">
      <form
        className="form" 
        onSubmit={submitHandler}
      >
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formState.name}
            onChange={changeHandler}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formState.email}
            onChange={changeHandler}
          />
        </label>
        <label>
          Role
          <input
            name="role"
            type="text"
            placeholder="Enter your role"
            value={formState.role}
            onChange={changeHandler}
          />
        </label>
        <button
          className="submitButton"
        >Submit</button>
      </form>
    </div>
  )
}

export default TeamForm