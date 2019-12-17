import React, { useState, useEffect } from "react";

const Form = props => {
  const { team, setTeam, edit } = props;

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  //   useEffect(() => {

  //   }, [edit]);

  const onChangeHandler = e => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
    // console.log(newMember);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (edit.name == "name") {
      setTeam([...team, newMember]);
    } else {
      //   console.log(team);
      //   let old = team.find(e => e.name == edit.name);
      //   let testArray = team.filter(e => e.name === edit.name);
      //   console.log(testArray);
      //   old.name = newMember.name;
      //   old.email = newMember.email;
      //   old.role = newMember.role;
      //   console.log(old);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder={edit.name}
            name="name"
            id="fname"
            onChange={onChangeHandler}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            placeholder={edit.email}
            name="email"
            id="email"
            onChange={onChangeHandler}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            placeholder={edit.role}
            name="role"
            id="role"
            onChange={onChangeHandler}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};
export default Form;
