import React from "react";

export default function Form(props) {
    const { value } = props

    return (
        <form>
            <label>Name
                <input 
                name='name'
                type='text'
                placeholder='enter name'
                value={value.name}
                />
            </label>
                
            <label>Email
                <input 
                name='email'
                type='email'
                placeholder='enter email'
                value={value.email}
                />
            </label>
                
            <label>Role
                <select name='role'>
                    <option value=''>select a role</option>
                    <option value='frontend engineer'>frontend engineer</option>
                    <option value='backend engineer'>backend engineer</option>
                    <option value='UX designer'>UX designer</option>
                    <option value='project manager'>project manager</option>
                    <option value='data analyst'>data analyst</option>
                </select>
            </label>
            
            <button>submit</button>
            
        </form>
    )
}