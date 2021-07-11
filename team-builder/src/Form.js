import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
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
              <input type="text" onChange={onChange} name="username" value={values.username}/>
            </label>
    
            <label>Email
              <input type="email" onChange={onChange} name="email" value={values.email}/>
            </label>

            <label>Hero
              <input onChange={onChange} name="hero" value={values.hero}/>
            </label>
    
            <div className='submit'>
              <button>submit</button>
            </div>
          </div>
        </form>
      )
}