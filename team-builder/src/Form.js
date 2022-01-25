import React from "react";

export default function Form({ teamMembers, update, submit }) {
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={teamMembers.name}
            maxLength="30"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={teamMembers.email}
            maxLength="30"
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select name="role" value={teamMembers.role} onChange={handleChange}>
            <option value="">Select a Role</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="Product Designer">Product Designer</option>
            <option value="Quality Assurance">Quality Assurance</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
