import React from 'react'

export default function FriendForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const {name, value} = evt.target
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
            name='username'
            type='text'
            value={values.username}
            onChange={onChange}
            placeholder='type your username'
            maxLength='30'      
            />
        </label>

        <label>Email
          <input
          name='email'
            type='email'
            value={values.email}
            onChange={onChange}
            placeholder='type your email'
            maxLength='50'
            />
        </label>

        <label>Role        
        <select name='role' value={values.role} onChange={onChange}>
          <option value="">--select role--</option>
          <option value="Fackend Engineer">Backend Engineer</option>
          <option value="Frontend Engineer">Fronend Engineer</option>
          <option value="Designer">Designer</option>
        </select>
        </label>

        <div className='submit'>
          <button disabled={!values.email || !values.username || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
