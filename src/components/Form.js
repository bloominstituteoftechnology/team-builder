import React from "react"

export default function Form({ values, update, submit }) {
    
    const onChange = event => { 
      const{name,value} = event.target
      update(name, value)
    }
  
    const onSubmit = event => {
      event.preventDefault()
      submit()
    }
  
    return (
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
          <h2>Add  TeamMembers</h2>
          <button disabled={!values.username || !values.email || !values.role}>submit</button>
        </div>
  
        <div className='form-group inputs'>
          <h4>General information</h4>
          <label htmlFor='usernameInput'>Username:&nbsp;
            <input
              id='usernameInput'
              name='username'
              type='text'
              placeholder='Enter username'
              maxLength='15'
              value={values.username}
              onChange={onChange}
            />
          </label>
  
          <label htmlFor='emailInput'>Email:&nbsp;
            <input
              id='emailInput'
              name='email'
              type='email'
              placeholder='Enter email'
              maxLength='20'
              value={values.email}
              onChange={onChange}
            />
          </label>
          <label>Role:&nbsp;
            <select name='role' value={values.role} onChange={onChange}>
              <option disabled value=''>Select a role</option>
              <option value='backend engineer'>backend engineer</option>
              <option value='frontend engineer'>frontend engineer</option>
              <option value='designer'>designer</option>
            </select>
          </label>
        </div>
      </form>
    )
  }