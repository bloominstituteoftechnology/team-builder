import React from "react";

export default function Form(props) {
  const { update, submit, formValue } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name
          <input
            type="text"
            value={formValue.name}
            onChange={onChange}
            name="name"
            placeholder="Name"
          />
        </label>
        <label>
          Role
          <select value={formValue.role} name="role" onChange={onChange}>
            <option value="">Select</option>
            <option value="Manager">Manager</option>
            <option value="Assistant Manager">Assistant Manager</option>
            <option value="Lead Frontend Developer">
              Lead Frontend Developer
            </option>
            <option value="Junior Frontend Developer">
              Junior Frontend Developer
            </option>
            <option value="Lead Backend Developer">
              Lead Backend Developer
            </option>
          </select>
        </label>
        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
