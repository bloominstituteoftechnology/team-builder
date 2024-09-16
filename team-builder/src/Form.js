import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const {name} = evt.target
        const {value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
        
            <label>Name
              <input type="text" onChange={onChange} name="name" values={values.name}/>
            </label>
    
            <label>Email
              <input type="email" onChange={onChange} name="email" values={values.email}/>
            </label>

            <label>Hero
              <input onChange={onChange} name="hero" values={values.hero}/>
            </label>
    
            <div className='submit'>
              <button>Submit</button>
            </div>
          </div>
        </form>
      )
}