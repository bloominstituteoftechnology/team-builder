import React from "react";

export default function Form(props) {
    const { value, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    return (
        <form onSubmit={onSubmit}>
            <label>Name
                <input 
                name='name'
                type='text'
                placeholder='enter name'
                value={value.name}
                onChange={onChange}
                />
            </label>
                
            <label>Email
                <input 
                name='email'
                type='email'
                placeholder='enter email'
                value={value.email}
                onChange={onChange}
                />
            </label>
                
            <label>Role
                <select name='role' value={value.role} onChange={onChange}>
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