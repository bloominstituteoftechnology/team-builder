import React from 'react'

export default function Form (props) {
    const { update, submit, val } = props

    const onChange = event => {
        const { name, value } = event.target
        update (name, value)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return (
        <form className='container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input type='text' value={val.name} onChange={onChange} name='name' placeholder='Name' maxLength='15' />
                </label>
                <label>Email
                    <input type='text' value={val.email} onChange={onChange} name='email' placeholder='Email' maxLength='50' />
                </label>
                <label>Role
                    <select value={val.role} name='role' onChange={onChange}>
                        <option value=''>Select</option>
                        <option value='CNA'>CNA</option>
                        <option value='Designer'>Designer</option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='Full Stack Web Developer'>Full Stack Web Developer</option>
                        <option value='Construction'>Construction</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>

        </form>
    )
}
