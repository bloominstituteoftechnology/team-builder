import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props

  const onChange = evt => {
    const { value, name } = evt.target;

    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
          <label>Username
              <input
                name="username"
                type="text"
                placeholder="user name here!"
                maxLength="30"
                value={values.username}
                onChange={onChange}
              />
        </label>

        <label>Email
              <input
                name="email"
                type="email"
                placeholder="email..."
                value={values.email}
                onChange={onChange}
              />
        </label>

       <label>Role
              <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a Role --</option>
                <option value="frontendEngineer">Frontend Engineer</option>
                <option value="backendEngineer">Backend Engineer</option>
                <option value="fullstackDev">Fullstack Dev</option>
              </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
