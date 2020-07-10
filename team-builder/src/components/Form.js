import React, { useState } from 'react';

const Form = props => {
  const [info, setInfo] = useState({
    memberName: "",
    email: ""
  })

  // Create a single change handler using the spread operator:
  const changeHandler = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value
    })
  }
  return (
    <form onSubmit={(event) => {
      // prevent page from refreshing
      event.preventDefault()
      // add the info to the application state
      props.addInfo(info)

      // reset the form values
      setInfo({memberName: "", email: ""})
    }}
    >
      <label htmlFor="memberName">Name:</label>
      <input 
        id="memberName" 
        type="text" 
        name="memberName" 
        placeholder="Please Enter Your Name"
        value={info.memberName}
        //onChange={(event) => { setInfo(event.target.value)}}
        onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Please Enter Your Email"
          value={info.email}
          //onChange={(event) => { setInfo(event.target.value)}}
          onChange={changeHandler}
        />
      <button type="submit">Click to Submit!</button>
    </form>
    );
};

export default Form;