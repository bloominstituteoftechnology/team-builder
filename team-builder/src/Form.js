import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
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
              name='name'
              type='text'
              placeholder='Enter your name'
              maxLength='20'
              value={values.name}
              onChange={onChange}
            />
          </label>

          <label>Email
            <input 
              name='email'
              type='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={onChange}
            />
          </label>

          <label>Role
            <select value={values.role} name='role' onChange={onChange}>
              <option value=''>-- Select a Role --</option>
              <option value='frontend'> Frontend Engineer</option>
              <option value='backend'>Backend Engineer</option>
              <option value='designer'>Web Designer</option>
              <option value='retired'>Retired</option>
            </select>
          </label>

          <div className='submit'>
              <button>Submit</button>
          </div>
        </div>
      </form>
    )
}