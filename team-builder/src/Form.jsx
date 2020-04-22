import React from 'react'
import { useState } from 'react'



const Form = ({addNewMember}) => {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
      })
    
      const inputChange = (event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
      })
    
   
      
      const submit = (event) => {
        event.preventDefault()
        addNewMember(formData)
        setFormData({
          name: "",
          email: "",
          role: "",
        })
    } 
    
    
    return (
        <div>
           <form onSubmit={submit}> 
               <label htmlFor="nameBox">Name:</label> 
                <input onChange={inputChange} type="text" placeholder="name" name="name" id="nameBox" value={formData.name}/>
                <label htmlFor="emailBox">Email:</label>
                <input onChange={inputChange} type="email" placeholder="email" name="email" id="emailBox" value={formData.email} />
                <label htmlFor="roleBox">Role:</label>
                <select onChange={inputChange} placeholder="role" name="role" id="roleBox" value={formData.role} >
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>Data Scientist</option>
                    <option>English Teacher</option>
                </select>
                <button type="submit">Submit:</button>
           </form>
        </div>
    )
}

export default Form


