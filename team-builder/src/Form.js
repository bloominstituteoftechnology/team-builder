import React, {useState} from "react";

const Form = (props) => {
  const [member, setMember] = useState({
    name: '',
    email: '',
    role: ''
  })
  const { addNewMember } = props;

  const onMemberSubmit = (event) =>{
    setMember({
      ...member, 
      [event.target.id]:event.target.value})
  }
  // const onEmailChange = (event) =>{
  //   setMember({...member, 
  //     email:event.target.value})
  // }

  const submitForm = event => {
    event.preventDefault();
    addNewMember(member);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="formSection">
          <label htmlFor="name">Team Member Name: </label>
          <input
            id="name"
            type="text"
            placeholder="John Wick"
            onChange={onMemberSubmit}
          ></input>
          <br />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="john@wick.com"
            onChange={onMemberSubmit}
          ></input>
          <br />
          <label htmlFor="role">Role: </label>
          <select id="role" onChange={onMemberSubmit} >
            <option value="Back-end">Back-end</option>
            <option value="Front-end">Front-end</option>
            <option value="QA">QA</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="submitButton">
          <button type="submit">Create Member</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
