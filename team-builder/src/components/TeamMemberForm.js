import React from 'react';

export default function TeamMemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
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
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Student-Developer'>Student Developer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled={!values.username || !values.email || !values.role}>Submit</button>
                </div>
            </div>
        </form>
    )
}