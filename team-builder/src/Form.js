import React, { useState } from "react";
import friends from "./friends.js";

const initialFormsValues = {
  firstName: "",
  nationality: "",
  status: "",
};
export default function Form() {
  const [friend, setFriend] = useState(friends);
  const [formValues, setFormValues] = useState(initialFormsValues);

    const submit = (e) => {
      //prevent submit
    e.preventDefault();
        //create new object to add to friends array
    const toBeUpdated = {
        firstName: formValues.firstName,
        nationality: formValues.nationality,
        status: formValues.status
        };
        //spread the current state and then add {toBeUpdated} to the end of the list
    setFriend([...friend, toBeUpdated]);
        //reset to initial values
    setFormValues(initialFormsValues); 
  }


  const change = (e) => {
    const { name, value } = e.target;
    setFormValues((previousFormValues) => ({
      ...previousFormValues,
      [name]: value
    }));
  };
//   const newFriend = {
//     firstName: formValues.firstName,
//     nationality: formValues.nationality,
//     status: formValues.status,
//   }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={change}
          value={formValues.firstName}
          placeholder="First Name"
          id="firstNameInput"
          name="firstName"
          type="text"
        />
        <input
          onChange={change}
          value={formValues.nationality}
          placeholder="nationality"
          id="nationalityInput"
          name="nationality"
          type="text"
        />
        <input
          onChange={change}
          value={formValues.status}
          placeholder="status"
          id="statusInput"
          name="status"
          type="text"
        />
        <button type="submit">submit</button>
      </form>
      {(friend && friend.map((friends, idx) => (
        <div style={{ border: ".15rem solid black" }}key={idx}>
          <h3>{friends.firstName}</h3>
          <p>{friends.nationality}</p>
          <p>{friends.status}</p>
        </div>
      )))}
    </div>
  );
}
