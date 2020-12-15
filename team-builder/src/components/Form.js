import React from "react";

export default function Form(props) {
  const { name, email, role } = props.values;
  const { update } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            maxLength="25"
            placeholder="First & Last Name"
            value={name}
            name="name"
            type="text"
            onChange={onChange}
          />
        </label>

        <label>
          Email:
          <input
            maxLength="25"
            placeholder="Email"
            value={email}
            name="name"
            type="email"
            onChange={onChange}
          />
        </label>

        <label>
          Role:
          <select name="Role" value={role} onChange={onChange}>
            <option value="">Select Role</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
          </select>
        </label>
        <div class="submit">
          <input
            type="submit"
            onClick={(event) => {
              event.preventDefault();
            }}
          />
        </div>
      </form>
    </div>
  );
}
