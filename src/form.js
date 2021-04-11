import React from 'react'

export default function TeamForm(props) {
  
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
        
        <label>Team Membername
          
              <input 
                type="text"
                value={values.username}
                placeholder="type a Membername"
                onChange={onChange}
                name="username"
              />
        </label>

        <label>Email
          {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
          <input 
            type="email"
            name="email"
            value={values.email}
            placeholder="Type a email"
            onChange={onChange}
          />
        </label>

        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select name="role"  value={values.role} onChange={onChange}>
            <option value="">select role!</option>
            <option value="student">Student</option>
            <option value="graduate">Graduate</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
