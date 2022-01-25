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
        <label>Team Member
              <input
                name="username"
                email="randomperson@hotmail.com"
                role="Chief Software Engineer"
              />
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}