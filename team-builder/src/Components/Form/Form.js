import React, { useState, useEffect } from "react";

import "./form.css";

function Form({ addMember, memberToEdit, setMemberToEdit, editMember }) {
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phoneNumber: "",
    role: "",
    isHappy: false
  });

  const inputHandler = event => {
    let value =
      event.target.name !== "isHappy"
        ? event.target.value
        : event.target.checked;

    setNewMember({
      ...newMember,
      [event.target.name]: value,
      isEditing: true
    });
  };

  useEffect(() => {
    setNewMember(memberToEdit);
  }, [memberToEdit]);

  const submitForm = event => {
    event.preventDefault();
    memberToEdit.isEditing ? editMember(newMember) : addMember(newMember);

    // reset newMember object
    setNewMember({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      phoneNumber: "",
      role: "",
      isHappy: false
    });
    // reset memberToEdit object
    setMemberToEdit({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      phoneNumber: "",
      role: "",
      isHappy: false,
      isEditing: false
    });
  };

  return (
    <div className="member-form">
      <form onSubmit={submitForm}>
        <section>
          <label htmlFor="fname">First name: </label>
          <input
            onChange={inputHandler}
            type="text"
            value={newMember.firstName}
            name="firstName"
            id="fname"
            placeholder="Enter Your First Name"
            required
          />
        </section>

        <section>
          <label htmlFor="lname">Last name: </label>
          <input
            onChange={inputHandler}
            type="text"
            value={newMember.lastName}
            name="lastName"
            id="lname"
            placeholder="Enter Your Last Name"
            required
          />
        </section>

        <section>
          <label htmlFor="age">Age: </label>
          <input
            onChange={inputHandler}
            type="number"
            value={newMember.age}
            name="age"
            id="age"
            placeholder="Enter Your Age"
            required
          />
        </section>

        <section id="gender-select">
          <label htmlFor="gender">Gender: </label>
          <select
            onChange={inputHandler}
            value={newMember.gender}
            name="gender"
            id="gender"
            required
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </section>



        <button type="submit" id="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
