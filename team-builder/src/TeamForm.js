import React from 'react'

export default function TeamForm(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const name = evt.target.name;
    const { value } = evt.target;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            maxLength="30"
          />
        </label>
        <label>Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="CEO">CEO</option>
            <option value="CTO">CTO</option>
            <option value="Intern">Intern</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.name || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
