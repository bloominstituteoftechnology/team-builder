import React from "react";

const form = (props) => {
  return (
    <form>
      <label htmlFor="firstName">First name: </label>
      <input type="text" id="firstName" name="firstName" />

      <label htmlFor="email">Enter your email:</label>
      <input type="email" id="email" name="email"></input>

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
