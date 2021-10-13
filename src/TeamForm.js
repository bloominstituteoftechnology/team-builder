import React from "react";

export default function TeamForm(props) {
    const { values, update, submit } = props
    
    const onChange = evt => {
        const { name, value} = evt.target
        update(name,value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Username
                    <input 
                    type='text'
                    name='username'
                    value={values.username}
                    onChange={onChange}
                    placeholder='Enter a username'
                    />
                </label>

                <label>Email
                    <input 
                    type='email'
                    name='email'
                    value={values.email}
                    onchange={onChange}
                    placeholder='Enter an email address'
                    />
                </label>

                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>--Select a role--</option>
                        <option value='backend engineer'>Backend Engineer</option>
                        <option value='frontend engineer'>Frontend Engineer</option>
                        <option value='designer'>Designer</option>
                        <option value='tester'>Tester</option>
                        <option value='project manager'>Project Manager</option>
                        <option value='team lead'>Team Lead</option>
                        <option value='project lead'>Project Lead</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}