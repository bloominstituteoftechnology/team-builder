import React from 'react'

export default function Form(props) {
    
    const { submit, change, values} = props
    
    return (
        
        <form onSubmit={submit}>
        <label>Name       
          <input name='name' type='text' onChange={change} value={values.name} placeholder='Name'/>
        </label>
        <label>Email
          <input name='email' type='text' onChange={change} value={values.email} placeholder='Email'/>
        </label>
        <label>Role 
            <select name='role' value={values.role} onChange={change}>
                    <option value=''>Role</option>
                    <option value='Front-End'>Front-End</option>
                    <option value='Back-End'>Back-End</option>
                    <option value='Team Lead'>Team Lead</option>
                </select> 
            </label>
            <button>Submit</button>
        </form> 
    )
}