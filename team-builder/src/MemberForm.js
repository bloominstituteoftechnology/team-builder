import React, { useState } from 'react'

const MemberForm = props => {

  const [ member, setMember ] = useState({
    username: "",
    email: "",
    role: ""
  })

  const changeHandler = (evt) => {
    setMember({
      ...member,
      [evt.target.name]: evt.target.value
    })
 }
  return (
    <div className="Form">
      <form
        onSubmit={evt => {
          evt.preventDefault();
          props.addMember(member)
          setMember({ username:"", email:"", role:"" })
      }}>
        <label htmlFor="username">Name: </label>
          <input
            type="text"
            name="username"
            id="username"
            required={true}
            placeholder="Please enter a name"
            value={member.username}
            onChange={changeHandler}
          />
        <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="Please enter an email"
            value={member.email}
            onChange={changeHandler}
          />
        <label htmlFor="role">Role: </label>
          <select
            type="text"
            name="role"
            id="role"
            value={member.role}
            onChange={changeHandler}
          >
            <option value={0}>-- Please select a Role --</option>
            <option value={1}>Frontend Engineer</option>
            <option value={2}>Backend Engineer</option>
            <option value={3}>Designer</option>
          </select>
          <button>Add Member</button>
      </form>
    </div>
  )
}

export default MemberForm;