import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
    border: "2px solid slategrey",
    padding: "2em 0",
    backgroundColor: "#a3eee4"
  },
  textField: {
    width: "70%",
    margin: "0 auto",
    padding: "1em 0"
  },
  button: {
    margin: "1em auto 0",
    padding: "10px",
    width: "60%",
    border: "2px solid grey",
    borderRadius: "20px",
    cursor: "pointer",
    backgroundColor: "#e1eceb",
    fontSize: "1em",
    "&:hover": {
      borderColor: "pink",
      boxShadow: "2px 10px 14px -2px rgba(23,88,119,0.81)"
    }
  }
}));

const Form = props => {
  const [members, setMembers] = useState({});

  const changeHandler = e => {
    setMembers({ ...members, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    if (props.memberToEdit) {
      props.editMember(members);
    } else {
      const newMember = {
        ...members,
        id: Date.now()
      };
      props.addMember(newMember);
      setMembers({ name: "", email: "", role: "" });
    }
  };

  useEffect(() => {
    if (props.memberToEdit) setMembers(props.memberToEdit);
  }, [props.memberToEdit]);

  const classes = useStyles(); //just for styles

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <TextField
        required
        id="name"
        label="Name"
        name="name"
        className={classes.textField}
        value={members.name}
        onChange={changeHandler}
        margin="normal"
      />
      <TextField
        required
        id="email"
        label="Email"
        name="email"
        className={classes.textField}
        value={members.email}
        onChange={changeHandler}
        margin="normal"
      />
      <TextField
        id="role"
        label="Role"
        name="role"
        className={classes.textField}
        value={members.role}
        onChange={changeHandler}
        margin="normal"
      />
      <button className={classes.button} type="submit">
        Add/Edit Team Member
      </button>
    </form>
  );
};

export default Form;
