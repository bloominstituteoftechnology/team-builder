import React from 'react'

export default function Form(props){
    const {values, update, submit} = props

    const onChange = evt => {

    }
    const onSubmit = evt => {

    }

return (
    <form className='form holder' onSubmit={onSubmit}>
        <label>Name
            <input
            name='name'
            type='text'
            value={values.name}
            onChange={onChange}
            />
        </label>
        <label>E-mail
            <input
            name='email'
            type='email'
            value={values.email}
            onChange={onChange}
            />
        </label>
        <label>Role
            <input
            name='role'
            type='text'
            value={values.role}
            onChange={onChange}
            />
        </label>
    </form>
)
}

