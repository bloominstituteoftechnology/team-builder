import React, { useState } from "react";

const UserForm = () => {
    const [ info , setInfo ] = useState({name: "", email:"", role:""});
    // const [ email , setEmail ] = useState({email: ""});
    // const [ role , setRole ] = useState({role: ""})
    const handleChanges = e => {
        // console.log(e.target.value) // get value of inputs
        setInfo({...info, [e.target.name]: e.target.value})
        console.log(info)
    }
    return (
        <form>
            <label htmlFor="name" >Name</label>
            <input title="name" type="text" name="name" onChange={handleChanges}></input>
            <label htmlFor="email" >Email</label>
            <input title="email" type="text" name="email" onChange={handleChanges}></input>
            <label htmlFor="role" >Role</label>
            <input title="role" type="text" name="role" onChange={handleChanges}></input>
            <button type="submit">Add Member</button>
        </form>
    )
} 

export default UserForm