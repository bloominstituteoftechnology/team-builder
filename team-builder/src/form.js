import React from "react";

export default function Form(props) {

    const { formValues, change, submit } = props;


  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">
          Name
          <input type="text" name="name" value={formValues.name} onChange={change}/>
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" value={formValues.email} onChange={change} />
        </label>
        <select name='role' value={formValues.role} onChange={change}>
        <option value=''>select role</option>
        <option value='Backend'>Backend</option>
        <option value='Frontend'>Frontend</option>
        <option value='Designer'>Designer</option>
        
      </select>
      <button type = "submit">Add</button>
      </form>
    </div>
  );
}