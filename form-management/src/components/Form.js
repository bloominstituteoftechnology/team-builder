import React, { useState, useEffect } from "react";

const Form = props => {
  const { team, setTeam, edit, setEdit, sort } = props;

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const [input, setInput] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    setInput({
      name: edit.name,
      email: edit.email,
      role: edit.role
    });
  }, [edit]);

  const onChangeHandler = e => {
    setInput({
      [e.target.name]: e.target.value
    });
    if (edit.name == "") {
      setNewMember({ ...newMember, [e.target.name]: e.target.value });
      console.log("new", newMember);
    } else {
      setEdit({ ...edit, [e.target.name]: [e.target.value] });
    }
  };

  // const [tempTeam, setTempTeam] = useState([]);
  // console.log(`tempTeam: ${tempTeam}`);

  const onFormSubmit = e => {
    e.preventDefault();
    setInput({
      name: "",
      email: "",
      role: ""
    });

    if (edit.name == "") {
      setTeam([...team, newMember]);
      // setTempTeam([...tempTeam, newMember]);
    } else {
      team.splice(edit.index, 1);
      setTeam([...team, edit]);
      // setTempTeam([...tempTeam, edit]);
    }
  };

  // const [btnSort, setBtnSort] = useState(0);

  // useEffect(() => {
  //   sort(team);
  //   // console.log(tempTeam);
  //   // sort(tempTeam);
  //   // setTeam(tempTeam);
  // }, [btnSort]);

  // console.log(btnSort);

  return (
    <>
      <form onSubmit={onFormSubmit} className="form">
        <label className="form-label-name form-label">
          Name:
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="fname"
            onChange={onChangeHandler}
            value={input.name}
            required
            className="form-input form-input-name"
          />
        </label>
        <label className="form-label-email form-label">
          Email:
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            onChange={onChangeHandler}
            value={input.email}
            className="form-input form-input-email"
          />
        </label>
        <label className="form-label-role form-label">
          Role:
          <input
            type="text"
            placeholder="Role"
            name="role"
            id="role"
            onChange={onChangeHandler}
            value={input.role}
            className="form-input form-input-role"
          />
        </label>
        <button onClick={() => sort(team)} className="form-btn">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
