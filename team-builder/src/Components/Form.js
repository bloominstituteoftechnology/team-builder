import React from "react";
import "../App.css";

function Form({ teamMember, handleChange, handleSubmit, renderMember }) {
  return (
    <>
      <section className="form">
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            <br />
            Name:{" "}
            <input
              type="text"
              name="name"
              value={teamMember.name}
              onChange={event => handleChange(event)}
            />
            Email:{" "}
            <input
              type="email"
              name="email"
              value={teamMember.email}
              onChange={event => handleChange(event)}
            />
            Role:{" "}
            <input
              type="text"
              name="role"
              value={teamMember.role}
              onChange={event => handleChange(event)}
            />
          </label>
          <button onClick={renderMember}>Submit</button>
        </form>
      </section>
    </>
  );
}
export default Form;
