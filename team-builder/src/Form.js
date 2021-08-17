import React from 'react'

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    update(name, value);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
              <input 
                type="text"
                name="name"
                value={values.name}
                placeholder="Type in a name"
                maxLength="30"
                onChange={onChange}
              />
        </label>

        <label>Email
          <input 
            type="email"
            name="email"
            value={values.email}
            maxLength="50"
            placeholder="Type in an email"
            onChange={onChange}
          />
        </label>

        <label>Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Frontend Developer'>Frontend Developer</option>
            <option value='Backend Developer'>Backend Developer</option>
            <option value='Designer'>Designer</option>
            <option value='Management'>Management</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
