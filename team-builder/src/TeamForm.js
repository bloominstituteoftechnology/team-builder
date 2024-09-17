import React from 'react'

export default function TeamForm(props) {
    const { values, update, submit} = props

    // change handler for inputs
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    // submit handler
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Username
                    <input
                        type='text'
                        name='username'
                        onChange={onChange}
                        value={values.username}                    
                    />
                </label>
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Fullstack Engineer'>Fullstack Engineer</option>
                        <option value='Designer'>Designer</option>                    
                    </select>                
                </label>
                <div>
                    <button disabled={!values.username || !values.email || !values.role}>Submit</button>
                </div>
            </div>
        </form> 
    )
}