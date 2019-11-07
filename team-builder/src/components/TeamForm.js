import React, { useState } from "react";

const TeamForm = props => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    dob: "",
  })

// console.log(props)

const changeHandler = event => {
  console.log(event.target.value)
  setUser({...user, [event.target.name]: event.target.value})
}
  // state is a container that allows us to hold data is a componet 59:25
  //creating single source of true = single starting point

  // "newNote" = newUser 
  //addNewNote = addNewUser
  
  const submitForm = event => {
    event.preventDefault();
    const newUser = {
      ...user,
      id: Date.now()
    };
    props.addNewUser(newUser)
    setUser({...user, [event.target.name]: event.target.value})
  }

  return (
      <form onSubmit={submitForm}>
        <label htmlFor="name" >Team Builder: </label>
        <input 
        type="text"
        name="name"
        placeholder="First name..."
        value={user.name}
        onChange={changeHandler} 
         />

        <textarea 
        name="email" 
        placeholder="Type Your Note Here"
        value={user.body}
        onChange={changeHandler} 
        />
        <button type ="submit">Add Note</button>
      </form>
  );
}

export default TeamForm;
