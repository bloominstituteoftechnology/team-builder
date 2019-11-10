import React, {useState} from 'react';


const MemberForm = props => {

  const [person, setPerson] = useState({
    first: "",
    last: "",
    email: "",
    job: "",
  });


  const changeHandler = (e) =>{
    console.log(e.target.name);
    setPerson({...person, [e.target.name]: e.target.value})
    console.log(person);
  }

  const submitForm = (e) =>{
    e.preventDefault();
    props.addNewMember(person);
    setPerson({first: "i", last: "saw", email: "seven", job: "birds"});
  };
  return (
    <form>
      <label htmlFor="first">First Name</label>
      <input
        name="first"
        id="first"
        type="text"
        placeholder="First Name Here"
        onChange={changeHandler}
       />
      <label htmlFor="last">Last Name</label>
      <input
        name="last"
        id="last"
        type="text"
        placeholder="Last Name Here"
        onChange={changeHandler}
       />
      <label htmlFor="email">E-mail</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="E-mail Address Here"
        onChange={changeHandler}
       />
      <label htmlFor="job">Job Position</label>
      <input
        name="job"
        id="job"
        type="text"
        placeholder="Job Position Here"
        onChange={changeHandler}
       />

       <button type="submit" onSubmit={submitForm}>Submit</button>
    </form>
  );
};

export default MemberForm;
