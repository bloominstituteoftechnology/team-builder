import React from 'react'

export default function MemberForm(props) {
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
        <label>Name
 
          <input
            type='text'
            name='name'
            onChange={onChange}
            value={values.name}
            placeholder='type a name'
            maxLength='30'
          />
        </label>

        <label>Email
          <input
            type='email'
            name='email'
            onChange={onChange}
            value={values.email}
            placeholder='enter your e-mail'
            maxLength='30'
          />
        </label>

        <label>Role
          <select name='role' value={values.role} onChange={onChange}>
            <option value="">-- select role --</option>
            <option value="Manager">Manager</option>
            <option value="Lead Engineer">Lead Engineer</option>
            <option value="Negotiator">Negotiator</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.email || !values.name || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}