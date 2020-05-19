import React from 'react'

export default function TeamForm(props) {

    const {
        values,
        onInputChange,
        onSubmit,
      } = props


return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a team member</h2>
        <button>Submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>
        <label>name:&nbsp;
        <input
            type='text'
            placeholder='Type a name'
            maxLength='20'
            name='name'
            
            value={values.name}
            onChange={onInputChange}
          />
        </label>

        <label>Email:&nbsp;

        <input
            type='text'
            placeholder='Type email'
            maxLength='20'
            name='email'
            value={values.email}
            onChange={onInputChange}
          />
        </label>

        <label>Role:&nbsp;

        <select name='role' value={values.role} onChange={onInputChange}>
              <option value='' >Select a Role</option>
              <option value='Student'>Student</option>
              <option value='Instructor'>Instructor</option>
              <option value='Francisco'>pain in the butt</option>
              <option value='TL'>TL</option>
          </select>
        </label>
      </div>
    </form>
  )
}