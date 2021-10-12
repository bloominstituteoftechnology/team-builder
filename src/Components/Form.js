import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;
  background-color: gray;
  border-radius: 0.7rem;
  margin: 1rem auto;
  padding: 2% 5%;
  
  .error-message{
     font-weight: bold;
     font-size: 1rem;
     color: yellow;
  }
  input {
      margin: 0.5rem;
    }

  .myButton{
    margin: 1rem 0;
    box-shadow:inset 0px 1px 0px 0px #caefab;
    background:linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
    background-color:#77d42a;
    border-radius:6px;
    border:1px solid #268a16;
    cursor:pointer;
    color:#306108;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #aade7c;


    &:hover {
        background:linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
        background-color:#5cb811;
    }
    &:active {
        position:relative;
        top:1px;
    }
    
`;

export default function Form(props) {
  const initalFormValues = { name: "", email: "", role: "" };

  const [formData, setFormData] = useState(initalFormValues);

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    props.setErrorMessage("");
  };

  const clearFormInputs = () => {
    setFormData(initalFormValues);
  };

  return (
    <>
      <StyledForm>
        <h2>Add a Team Member</h2>

        <label>
          Name:
          <input
            onChange={onChange}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter a name"
          />
        </label>

        <label>
          Role:
          <input
            onChange={onChange}
            type="text"
            name="role"
            value={formData.role}
            placeholder="Enter a Role"
          />
        </label>

        <label>
          Email:
          <input
            onChange={onChange}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter an email"
          />
        </label>

        <div className="error-message">{props.errorMessage}</div>

        <button
          onClick={(e) => {
            e.preventDefault();
            props.submitForm(formData, clearFormInputs);
          }}
          className="myButton"
        >
          Add Team Member
        </button>
      </StyledForm>
    </>
  );
}
