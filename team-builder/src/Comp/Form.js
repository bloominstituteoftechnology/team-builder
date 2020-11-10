import React from "react";

function Form(props) {
  //This is the team we are going to build
  // const [team, setTeam] = useState([
  //   {
  //     id: 1,
  //     name: "Aszalea",
  //     email: "this@gmail.com",
  //      role:"Software",
  //   },
  // ]);
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name"> Name</label>
        <input
          id="name"
          type="text"
          placeholder="New Team Member"
          onChange={onChange}
          value={values.username}
          maxLength="30"
        />
        <br></br>
        <label htmlFor="email"> Email</label>
        <input
          id="email"
          type="email"
          placeholder="New Email"
          onChange={onChange}
          value={values.email}
          maxLength="30"
        />
        <br></br>
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          placeholder="New Role"
          onChange={onChange}
          value={values.role}
          maxLength="30"
        />
        <br></br>
        <input type="submit"></input>
      </form>
    </>
  );
}

export default Form;
