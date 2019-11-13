import React, { useState } from 'react'

const Form = props=>{
const [member, setMember] = useState({
    name: '',
    id: '',
    role: ''
})

const handleChanges = e =>{
    setMember({...member, [e.target.name]: e.target.value})
}

const submitHandler = e =>{
    e.preventDefault()
    const newMate = {
        ...member,
        id: Date.now(),
    }
    props.addTeamMate(newMate)
    setMember({ name: "", email: "", role: "" });
}
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Member's Name: </label>
                <input onChange={handleChanges} id="name" name="name" value={member.name} type="text" placeholder="Name"></input>
                <br></br>
               
                <label htmlFor="email">Member's Email: </label>
                <input onChange={handleChanges} id="email" name="email" value={member.email} type="text" placeholder="Email"></input>
                <br></br>
               
                <label htmlFor="role">Member's Position</label>
                <input onChange={handleChanges} id="role" name="role" value={member.role} type="text" placeholder="Position"></input>
                <br></br>
               
                <button type="submit">Add Team Member</button>
            </form>
        </div>
    )
}
export default Form