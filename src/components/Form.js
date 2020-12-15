import React, { useState } from 'react'
// needs name email and role
export default function Form(props) {
    const [form, setForm] = useState({ name: props.name, email: '', role: ''})

    const makeChanges = (event) => {

        const newMember = {...form, [event.target.name]: event.target.value };
        setForm(newMember)
      };
    
      const submit = event => {
        event.preventDefault()
        props.newForm(form)
      }
    return (
        <form onSubmit={submit}>
        <label htmlFor='name'>Name</label>
        <input 
          id="name" 
          onChange={makeChanges} 
          type="text" 
          placeholder="Name" 
          value={form.name}
          name="name" />
        
        <label htmlFor='email'>Email</label>
        <input 
          id="email" 
          onChange={makeChanges} 
          type="email" 
          placeholder="Email?" 
          value={form.email}
          name="email" />

        <label htmlFor='role'>Role</label>
        <input 
          id="role" 
          onChange={makeChanges} 
          type="text" 
          placeholder="role?" 
          value={form.role}
          name="role" />
          <button type = "submit">Add</button>
        </form>
        
    )
}