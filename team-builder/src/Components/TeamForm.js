import React from "react";

export default function TeamForm(props) {
  const { values, submit, update } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="form container" onSubmit={onSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={onChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="type an email..."
          masLength="30"
        />
      </label>
      <label>
        Role
        <select name="role" value={values.role} onChange={onChange}>
          <option value=""></option>
          <option value="instructor">Instructor</option>
          <option value="student">Student</option>
          <option value="tl">Team Lead</option>
        </select>
      </label>

      <div className="submit">
        <button>Submit</button>
      </div>
    </div>
  );
}
