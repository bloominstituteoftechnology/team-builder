import React from "react";

function Form() {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={() => {}} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={() => {}} />
      <label htmlFor="role">Occupation</label>
      <option value="">-Select an Occupation-</option>
      <select name="role" onChange={() => {}}>
        <option value="FE">Frontend Engineer</option>
        <option value="BE">Backend Engineer</option>
        <option value="D">Designer</option>
      </select>
      <button>Submit</button>
    </form>
  );
}

export default Form;
