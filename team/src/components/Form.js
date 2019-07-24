import React, { useState } from 'react'

const Form = () => {
  const [ memberList, setMemberList ] = useState([])
  const [ member, setMember ] = useState({}) // {'name': 'kristin'}

  function handleSubmit(event) {
    event.preventDefault()
    setMemberList([...memberList , member])
    console.log('username', memberList)
  }

  function handleChange(event) {
    console.log('handleChange', event.target.value)
    setMember({ [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <div>
          <label for='firstname'>
            First Name
            <div>
              <input
                type='text'
                name='firstname'
                placeholder='Enter first name'
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className='form-group'>
          <label for='lastname'>
            Last Name
            <input
              type='text'
              name='lastname'
              aria-describedby='last name'
              placeholder='Enter last name'
              onChange={handleChange}
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  )
}

export default Form
