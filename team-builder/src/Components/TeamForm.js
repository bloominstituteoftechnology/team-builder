import React from 'react'

export default function TeamForm(props) {
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
            <div className='form-group submit'>
                <h2>Add a Team Member</h2>
                <button disabled={!values.name || !values.email || !values.role}>Submit</button>
            </div>
            <div className='form-group inputs'>
                <h4>General information</h4>
                <label htmlFor='nameInput'>Name:&nbsp;
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
                        <option value='Data Scientist'>Data Scientist</option>
                        <option value='Front End Developer'>Front End Developer</option>
                        <option value='Back End Developer'>Back End Developer</option>
                        <option value='UX Designer'>UX Designer</option>
                    </select>
                </label>
            </div>
        </form>
    )
}