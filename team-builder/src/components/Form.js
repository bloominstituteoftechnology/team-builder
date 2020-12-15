import React from "react";

export default function Form(props) {
  const { name, email, role } = props;

  // const onChange = (event) => {
  //     const { name, email } = event.target;
  //     update(name, email);
  // };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            maxLength="25"
            placeholder="First & Last Name"
            id=""
            name=""
            type="text"
          />
        </label>

        <label>
          Email:
          <input maxLength="25" placeholder="Email" id="" name="" type="text" />
        </label>

        <label>
          Role:
          <select name="Role" value={role}>
            <option value="">Select Role</option>
            <option value="Work">Work</option>
            <option value="School">School</option>
          </select>
        </label>
        <input
          type="submit"
          onClick={(event) => {
            event.preventDefault();
          }}
        />
      </form>
    </div>
  );
}
