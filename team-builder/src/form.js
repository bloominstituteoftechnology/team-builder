import React, { useState } from "react"

const MemberForm = ({ addNewMember }) => {

const [member, setMember] = useState({name:"", email: "", role: ""})

    const handleChanges = e => {
        console.log(e)
        setMember({...member, [e.target.name]: e.target.value})
    }

const submitMember = e => {
    e.preventDefault();
    addNewMember(member)
}
    
  return (
      <form onSubmit={submitMember}>
          <label htmlFor="name">Name</label>
          <input 
          id="name" 
          type="text" 
          placeholder="Enter name" 
          value={member.name}
          name="name"
          onChange={handleChanges}
          />
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          type="email" 
          placeholder="Enter email"
          value={member.email}
          name="email"
          onChange={handleChanges}
          />
          <label htmlFor="role">Role</label>
          <input 
          id="role" 
          type="text" 
          placeholder="Enter role"
          value={member.role}
          name="role"
          onChange={handleChanges}
          />
          <button type="submit">Add Member</button>
      </form>
  )
}

export default MemberForm

