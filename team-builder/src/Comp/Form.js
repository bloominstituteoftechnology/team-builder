import React from "react";

function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    console.log("handle", evt);
    // 🌹STEP 6 - IMPLEMENT the change handler for our inputs
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object
    const { name, value } = evt.target;
    // c) use the `update` callback coming in through props
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <>
      {/* 🔥 STEP 3 - Make an input of type `text` for username.
    Controlled inputs need `value` and `onChange` props.
    Inputs render what they're told - their current value comes from app state.
    At each keystroke, a change handler fires to change app state. */}
      <form onSubmit={onSubmit}>
        <label htmlFor="name"> Name</label>
        <input
          id="name"
          type="text"
          placeholder="New Team Member"
          onChange={onChange}
          // value={values.username}
          maxLength="30"
        ></input>
        <br></br>
        <label htmlFor="email"> Email</label>
        <input
          id="email"
          type="email"
          placeholder="New Email"
          onChange={onChange}
          // value={values.email}
          maxLength="30"
        />
        <br></br>
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          placeholder="New Role"
          onChange={onChange}
          // value={values.role}
          maxLength="30"
        />
        <br></br>
        <input type="submit" name="button" />
      </form>
    </>
  );
}

export default Form;
