import React from 'react'

export default function  TeamMemberForm(props) {
    const { values, update, submit} = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    return (
        <form className='form-container' onSubmit={onSubmit}>
        <div classNAme='form-group'>
          <label>
            <input placeholder='Name' type='text' name='name' onChange={onChange} values={values.name} />
          </label>
          <label>
            <input placeholder='Email' type='text' name='email' onChange={onChange} values={values.email} />
          </label>
          <label>
            <input placeholder='Role' type='text' name='role' onChange={onChange} values={values.role} />
          </label>
          <div className='submit-container'>
            <button>Submit</button>
          </div>
        </div>
     </form>
    )
}