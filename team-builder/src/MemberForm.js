import React from 'react'

export default function MemberForm (props) {
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
        <form className='form-container' onSubmit={onSubmit}>
            <div>
                <h2>Add a Team Member</h2>
            </div>
            <div className='form-group inputs'>
                <label htmlFor='usernameInput'>Name:&nbsp;
                    <input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Enter Name'
                        maxLength='20'
                        value={values.name}
                        onChange={onChange}
                        />
                </label>
                <label htmlFor='emailInput'>Email:&nbsp;
                    <input
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='Enter email'
                        maxLength='20'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role:&nbsp;
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>Select a role</option>
                        <option value='student'>Backend</option>
                        <option value='FrontEnd'>FrontEnd</option>
                        <option value='tl'>Full Sack Web</option>
                        <option value='tl'>Developer</option>
                    </select>
                </label>
                <button className='button' enabled={!values.username || !values.email || !values.role}>Submit</button>
            </div>
        </form>

    )
}
