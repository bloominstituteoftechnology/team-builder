import React from "react";

const Form = (props) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    props.change(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
      />

      <label htmlFor="email">Enter your email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
      ></input>

      <label htmlFor="role">
        <select className="role">
          <option>Select Role</option>
          <option>Front-End Developer</option>
          <option>Back-End Developer</option>
          <option>Full-Stack Developer</option>
          <option>Designer</option>
          <option>Project Manager</option>
        </select>
      </label>
    </form>
  );
};

export default Form;
