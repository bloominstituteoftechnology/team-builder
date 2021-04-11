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
      <div>  
        <label>Team Member Name
          
              <input 
                type="text" name="username"
                value={values.username}
                placeholder="Type a Member Name"
                onChange={onChange}
                
              />
        </label>

        </div>
        <div>
        <label>Email
         
          <input 
            type="email"
            name="email"
            value={values.email}
            placeholder="Type a email"
            onChange={onChange}
          />
        </label>
    </div>    
    <div>
        <label>Role
          
          <select name="role"  value={values.role} onChange={onChange}>
            <option value="">select role!</option>
            <option value="Backend engineer">Backend engineer</option>
            <option value="Front engineer">Front engineer</option>
            <option value="Data Analyst">Data Engineer</option>
            <option value="Full Stack">Full Stack</option>
          </select>
          
        </label>
    </div>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
  )
}
