import React from "react";

export default function Form({ TeamMembers, Update, Submit }) {
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    Update(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    Submit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={TeamMembers.name}
            maxLength="30"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            value={TeamMembers.email}
            maxLength="30"
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <select name="role" value={TeamMembers.role} onChange={handleChange}>
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
