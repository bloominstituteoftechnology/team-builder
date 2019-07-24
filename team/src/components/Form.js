import React, { useState } from 'react'

const Form = (props) => {
  // console.log('props', props)
  // const [ memberList, setMemberList ] = useState([])
  const [ member, setMember ] = useState({ member: '', email: '', role: '' })

  function handleSubmit(event) {
    event.preventDefault()
    props.setMemberList([...props.memberList, member])
    // memberList.push(member)
    console.log('submit', props.memberList)
  }

  function handleChange(event) {
    setMember({ ...member, [event.target.name]: event.target.value })
    console.log('handleChange', member)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Signup</legend>
          <div>
            <label htmlFor='member'>
              Member Name
              <input
                type='text'
                name='member'
                placeholder='Enter member name'
                value={member.member}
                onChange={handleChange}
                />
            </label>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>
              Member Email
              <input
                type='email'
                name='email'
                aria-describedby='email'
                placeholder='Enter Email'
                value={member.email}
                onChange={handleChange}
                />
            </label>
          </div>
          <div className="form-group">
          <label htmlFor="role">Member Role</label>
          <input
            type="text"
            name="role"
            placeholder="Member Role"
            onChange={handleChange}
            value={member.role}
            />
        </div>
          <button type='submit'>Submit</button>
        </fieldset>
      </form>

      {props.memberList.map(mem => {
        console.log('mem',mem.member)
        return (
          <div>
            <p>Member Name: {mem.member} Member Email: {mem.email} Member Role: {mem.role}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Form
