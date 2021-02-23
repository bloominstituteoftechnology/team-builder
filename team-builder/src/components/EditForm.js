import React from "react";
import { useState } from "react";

const EditForm = (props) => {
  const { empToEdit } = props;
  const [newEmp, setNewEmp] = useState({
    name: "",
    email: "",
    role: "",
  });

  const changeHandler = (evt) => {
    setNewEmp({
      ...newEmp,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleEdit(newEmp);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          New Name:
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={newEmp.name}
          />
        </label>
        <label>
          New Email:
          <input
            type="text"
            name="email"
            onChange={changeHandler}
            value={newEmp.email}
          />
        </label>
        <label>
          New Role:
          <input
            type="text"
            name="role"
            onChange={changeHandler}
            value={newEmp.role}
          />
        </label>
        <input type="submit" onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default EditForm;
