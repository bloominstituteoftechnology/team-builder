import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  
  const inputChange = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value
    });
  };

  const formSubmit = (event) => {
    event.preventDefault()
    props.data(formData)
  };

  return (
    <div>
      <from onSubmit={formSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={inputChange}
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
            value={formData.email}
            onChange={inputChange}
          />
        </label>
        <br />
        <label htmlFor="role">
          <input
            type="number"
            placeholder="Role"
            id="role"
            name="role"
            value={formData.role}
            onChange={inputChange}
          />
          <br />
          <button type="submit">Submit</button>
        </label>
      </from>
    </div>
  );
}

export default Form;
