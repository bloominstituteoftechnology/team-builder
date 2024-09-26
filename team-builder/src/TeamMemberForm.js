import React from 'react'

export default function TeamMemberForm(props) {
    const { values, update, submit } = props


    const onChange = event => {
        const { name, value } = event.target
        update(name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Username
            <input
                        type='text'
                        value={values.username}
                        placeholder='Username'
                        onChange={onChange}
                        name='username'
                    />
                </label>

                <label>Email
        <input
                        type='text'
                        value={values.email}
                        placeholder='Email'
                        onChange={onChange}
                        name='email'
                    />
                </label>

                <lable>Role
        <select
                        name='role'
                        value={values.role}
                        onChange={onChange}>
                        <option value=''>---Select Your Role</option>
                        <option value='Instructor'>Instructor</option>
                        <option value='Graduate'>Graduate</option>
                        <option value='Studet'>Student</option>
                    </select>
                </lable>

                <label>Language
        <input
                        type='text'
                        value={values.language}
                        placeholder='Prefered Language'
                        onChange={onChange}
                        name='language'
                    />
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>

    )
}