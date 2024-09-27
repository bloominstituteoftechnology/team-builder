import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const FormContainer = styled.form`
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  label {
    font-weight: 600;
    margin: 4%;
  }
  select {
    margin: 2%;
  }
  button {
    margin: 4%;
    font-size: 1.3rem;
    padding: 2%;
  }
`;
const initialFormValues = {
  name: "",
  role: "",
  email: "",
};

export default function Form(props) {
  const { submit, memberToEdit, EditMember } = props;
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    setFormValues(memberToEdit);
  }, [memberToEdit]);

  const onInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!formValues.name || !formValues.role || !formValues.email) {
      alert("Must Complete All Fields");
      return;
    }
    if (memberToEdit.id !== "") {
      EditMember(formValues);
    } else {
      const newTeamMemeber = {
        id: uuid(),
        name: formValues.name.trim(),
        role: formValues.role,
        email: formValues.email.trim(),
      };
      submit(newTeamMemeber);
      setFormValues(initialFormValues);
    }
  };
  return (
    <>
      <FormContainer onSubmit={onSubmit}>
        <h2>
          {memberToEdit.id === "" ? "Add Team Member" : "Edit Team Member"}
        </h2>
        <label>
          Name:
          <input
            id="name"
            name="name"
            type="text"
            value={formValues.name}
            onChange={onInputChange}
          />
        </label>
        <label>
          Role:
          <select
            id="role"
            name="role"
            value={formValues.role}
            onChange={onInputChange}
          >
            <option value="">Please selct a role</option>
            <option value="front-end Dev">Front-End Dev</option>
            <option value="back-end Dev">Back-End Dev</option>
            <option value="student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>
        </label>
        <label>
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={onInputChange}
          />
        </label>
        <button>submit</button>
      </FormContainer>
    </>
  );
}
