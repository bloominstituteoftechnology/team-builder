import React from 'react'
import { useState } from 'react'



const Form = () => {
    
    const [teamMembers, setTeamMembers] = useState({
        name: "",
        email: "",
        role: "",
      })
    
      const inputChange = (event => {
        setTeamMembers({
          ...teamMembers,
          [event.target.name]: event.target.value
        })
      })
    
      const [submitted, setSubmitted] = useState(false)
      
      const submit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    } 
    
    
    return (
        <div>
           <form onSubmit={submit}> 
               <label htmlFor="nameBox">Name:</label> 
                <input onChange={inputChange} type="text" placeholder="name" name="name" id="nameBox" value={teamMembers.name}/>
                <label htmlFor="emailBox">Email:</label>
                <input onChange={inputChange} type="email" placeholder="email" name="email" id="emailBox" value={teamMembers.email} />
                <label htmlFor="roleBox">Role:</label>
                <select onChange={inputChange} placeholder="role" name="role" id="roleBox" value={teamMembers.role} >
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>Data Scientist</option>
                    <option>English Teacher</option>
                </select>
                <button type="submit">Submit:</button>
           </form>
    {submitted ?<> <div>{teamMembers.name}</div><div>{teamMembers.email}</div> <div>{teamMembers.role}</div> </>: <div>Please fill out form</div>}
        </div>
    )
}

export default Form


