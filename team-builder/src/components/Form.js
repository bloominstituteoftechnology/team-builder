import React from "react";
import { useState, useEffect } from "react";

const Form = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
      
  }, [empToEdit])

  const changeHandler = (evt) => {
    setEmployee({
      ...employee,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAdd(employee);
    setEmployee({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={employee.name}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={employee.email}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            onChange={changeHandler}
            value={employee.role}
          />
        </label>
        <input type="submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
