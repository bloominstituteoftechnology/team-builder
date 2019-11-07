import React, { useState } from "react";

const TeamForm = props => {
  const [user, setUser] = useState({
    title: "",
    body: "",
    date: "",
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
        <label htmlFor="title" >Team Builder: </label>
        <input 
        id="title"
        type="text" 
        name="title"
        placeholder="First name..."
        value={user.title}
        onChange={changeHandler} 
         />

        <textarea 
        name="body" 
        placeholder="Type Your Note Here"
        value={user.body}
        onChange={changeHandler} 
        />
        <button type ="submit">Add Note</button>
      </form>
  );
}

export default TeamForm;
