import React, { useState } from "react";

const TeamForm = props => {
    console.log('props from TeamForm', props);
    const [teames, setTeames] = useState({
        name: "",
        position: "",
        email: "",
    });

    const changeHandler = (event) => {
        setTeames({
            ...teames,
            [event.target.name]: event.target.value
        });
    }

    const subitForm = (event) => {
        event.preventDefault();
        props.addNewTeamMem(teames);
        setTeames({ name: "", position: "", email: "" });
    };

    return (
        <form>
       <label htmlFor="name">Name</label>
       <input
       placeholder="Enter Name"
       type="text" name="name"
        value={teames.name} onChange={changeHandler} />

       <br/>

       <label htmlFor="position">Position</label>
       <input
       placeholder="Enter Position"
       type="text" name="position" 
       value={teames.position} onChange={changeHandler}  />

        <br/>

        <label htmlFor="email">Email</label>
        <input
       placeholder="Enter Email"
       type="text" name="email"
     value={teames.email} onChange={changeHandler} />

       <br/>

       <button type="submit" onClick={subitForm}>Add new member</button>
      </form>
    )
}
export default TeamForm; 