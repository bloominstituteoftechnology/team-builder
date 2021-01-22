import React, { useState } from "react";
import friends from "./friends.js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const initialFormsValues = {
  firstName: "",
  nationality: "",
  status: "",
};

export default function Form() {
  const [friend, setFriend] = useState(friends);
  const [formValues, setFormValues] = useState(initialFormsValues);

  const postNewFriend = (newFriend) => {
    axios.post("http://regres.in/api/users", newFriend)
    .then((res) => {
      setFriend([res.data,...friend]);
      console.log("Api success", res.data);
      setFormValues(initialFormsValues)
    })
    .catch((err)=>{
      console.log("error", err)
    })
  }
  const submit = (e) => {
    e.preventDefault();
  

    const toBeUpdated = { ...friend };
    toBeUpdated.firstName = formValues.firstName;
    toBeUpdated.nationality = formValues.nationality;
    toBeUpdated.status = formValues.status;
    setFriend(toBeUpdated);
    setFormValues(initialFormsValues);
  }
  const Change = (e) => {
    const { name, value } = e.target;
    setFormValues((previousFormValues) => ({
      ...previousFormValues,
      [name]: value
    }));
  };

  const newFriend = {
    id: uuidv4(),
    firstName: formValues.firstName,
    nationality: formValues.nationality,
    status: formValues.status,
  };
  postNewFriend(newFriend)
  setFormValues(initialFormsValues)
  
  // setFriend(friend.concat(newFriend))
  // setFormValues(initialFormsValues)

  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={Change}
          value={formValues.firstName}
          placeholder="First Name"
          id="firstNameInput"
          name="firstName"
          type="text"
        />
        <input
          onChange={Change}
          value={formValues.nationality}
          placeholder="nationality"
          id="nationalityInput"
          name="nationality"
          type="text"
        />
        <input
          onChange={Change}
          value={formValues.status}
          placeholder="status"
          id="statusInput"
          name="status"
          type="text"
        />
        <button type="submit">submit</button>
      </form>
      {friend.map((friends, idx) => (
        <div style={{ border: ".15rem solid black" }}key={idx}>
          <h3>{friends.firstName}</h3>
          <p>{friends.nationality}</p>
          <p>{friends.status}</p>
        </div>
      ))}
    </div>
  );
}
