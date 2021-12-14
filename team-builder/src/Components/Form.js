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
      <form onSubmit={onSubmit}>
        <div>
          <label>Name
            <input
              name='name'
              type='text'
              placeholder='enter a name'
              maxLength='30'
              value={values.name}
              onChange={onChange}
            />
          </label>

          <label>Email
            <input 
              name='email'
              type='email'
              placeholder='enter your email'
              value={values.email}
              onChange={onChange}
            />
          </label>

          <label>Role
            <select value={values.role} name='role' onChange={onChange}>
              <option value=''>--- Select a Role ---</option>
              <option value='ceo'>CEO</option>
              <option value='fullstack'> Fullstack Engineer</option>
              <option value='backend'>Backend Engineer</option>
              <option value='designer'>Web Designer</option>
              <option value='data'>Data Scientist</option>
              <option value='project'>Project Manager</option>
              <option value='intern'>Intern</option>
            </select>
          </label>

          <div className='submit'>
              <button>Submit</button>
          </div>
        </div>
      </form>
    )
} 