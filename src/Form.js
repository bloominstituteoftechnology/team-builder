import React from "react";

export default function teamForm(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="from group inputs">
        <label>
          Username
          <input
            type="text"
            name="username"
            onChange={onChange}
            value={values.username}
            placeholder="type a username"
            maxLength="30"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
            placeholder="type an email"
            maxLength="30"
          />
        </label>

        <label>
          Role
          <select name="role" value={values.role} onChange={onChange}>
            <option value="">select Role</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
            <option value="tl">Team Lead </option>
            <option value="be">Back End </option>
            <option value="fe">Front End </option>
            <option value="pm">Project manager </option>
          </select>
        </label>
        <div className="submit">
          <button disabled={!values.email || !values.username || !values.role}>
            submit
          </button>
        </div>
      </div>
    </form>
  );
}
