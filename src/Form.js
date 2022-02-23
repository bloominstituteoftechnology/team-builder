import React from 'react'

export default function Form(props){

    const onChange = evt => {
        const {name, value} = evt.target
        props.onChange(name, value);
    }
    const onSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }

return (
    <form className='form holder' onSubmit={onSubmit}>
        <label>Name
            <input
            name='name'
            type='text'
            placeholder='name'
            value={props.values.name}
            onChange={onChange}
            />
        </label>
        <label>E-mail
            <input
            name='email'
            type='email'
            placeholder='email'
            value={props.values.email}
            onChange={onChange}
            />
        </label>
        <label>Role
            <input
            name='role'
            type='text'
            placeholder='role'
            value={props.values.role}
            onChange={onChange}
            />
        </label>
        <input type='submit' value='Create team member'/>
    </form>
)
}

