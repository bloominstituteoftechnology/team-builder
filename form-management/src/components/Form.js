import React, { useState, useEffect } from "react";

const Form = props => {
  const { team, setTeam, edit } = props;

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const onChangeHandler = e => {
    if (edit.name == "Name") {
      setNewMember({ ...newMember, [e.target.name]: e.target.value });
      console.log("new", newMember);
    } else {
      if (newMember.name === "") {
        setNewMember({ ...edit });
        console.log("setNewMember to member", newMember);
      } else {
        setNewMember({ [e.target.name]: [e.target.value] });
        console.log(newMember);
        console.log(e.target.name);
        // console.log(e.target.value);
        // console.log("edit", edit);
      }
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (edit.name == "Name") {
      setTeam([...team, newMember]);
    } else {
      team.splice(edit.index, 1);
      setTeam([...team, newMember]);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit} className="form">
        <label className="form-label-name form-label">
          Name:
          <input
            type="text"
            placeholder={edit.name}
            name="name"
            id="fname"
            onChange={onChangeHandler}
          />
        </label>
        <label className="form-label-email form-label">
          Email:
          <input
            type="text"
            placeholder={edit.email}
            name="email"
            id="email"
            onChange={onChangeHandler}
          />
        </label>
        <label className="form-label-role form-label">
          Role:
          <input
            type="text"
            placeholder={edit.role}
            name="role"
            id="role"
            onChange={onChangeHandler}
          />
        </label>
        <button className="form-btn">Submit</button>
      </form>
    </>
  );
};
export default Form;
