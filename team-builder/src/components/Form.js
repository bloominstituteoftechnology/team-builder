import React from "react";

export default function Form(props) {
  const { formValues } = props;
  const onChange = (evt) => {
    const { name, value } = evt.target;
  };

  return (
    <div className="formContainer">
      {/* <p>this is the form</p>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={formValues.name}
        />
      </label> */}
      {/* <label>
        Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={onChange}
        />
      </label>
      <label>
        Role:
        <select value={formValues.role} name="role" onChange={onChange}>
          <option value="">-- Select a Role --</option>
          <option value="FrontEnd">-- Front-End Engineer --</option>
          <option value="Backend">-- Back-end Engineer --</option>
          <option value="Manager">-- Team Manager --</option>
        </select>
      </label> */}
    </div>
  );
}
