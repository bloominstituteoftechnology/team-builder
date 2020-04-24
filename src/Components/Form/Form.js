import React from "react";

const Form = (props) => {

  const setCustomValidity = (e) => {
    console.log(e);
  }


  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
        <input type="text" name="name" value={props.user.name} onChange={props.handleChange} required pattern='^[A-Za-z]+$' title="No numeric characters allowed" />
        </label>
        <label>
          Email:
        <input type="email" name="email" value={props.user.email} onChange={props.handleChange} required />
        </label>
        <label>
          Role:
        <input type="text" name="role" value={props.user.role} onChange={props.handleChange} required />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
};

export default Form;
