import React from "react";

export default function Form(props) {
  const { values, update, submit, errorText } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;

    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Enter your email"
          />
        </label>
        <lable>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">--Choose a role!--</option>
            <option value="front-end">Front-end Developer</option>
            <option value="back-end">Back-End Developer</option>
            <option value="designer">UI Designer</option>
            <option value="hacker">Ethical Hacker</option>
            <option value="freelancer">Freelancer</option>
          </select>
        </lable>
        <div className="submit">
          <button>Submit Details</button>
        </div>
        {/* <div>
          <h2>{details.name}</h2>
          <p>Email: {details.email}</p>
          <p>Role: {details.role}</p>
        </div> */}
      </form>
    </div>
  );
}
