import React, { useState } from 'react'

const Form = props=>{
const [member, setMember] = useState({
    name: '',
    image: '',
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
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg'
    }
    props.addTeamMate(newMate)
    setMember(newMate)
}
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Member's Name</label>
                <input onChange={handleChanges} id="name" name="name" value={member.name} type="text" placeholder="Name"></input>
               
                <label htmlFor="id">Member's ID</label>
                <input onChange={handleChanges} id="id" name="id" value={member.id} type="text" placeholder="ID"></input>
               
                <label htmlFor="role">Member's Position</label>
                <input onChange={handleChanges} id="role" name="role" value={member.role} type="text" placeholder="Position"></input>
               
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form