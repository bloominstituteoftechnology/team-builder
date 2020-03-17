import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
        <input type="text" name="name" value={props.user.name} onChange={props.handleChange} required />
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
