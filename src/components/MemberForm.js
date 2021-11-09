import React from 'react'

export default function MemberForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const { values, update, submit } = props

  const onChange = evt => {
    // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    const name = evt.target.name;
    // b) pull the value of the input from the event object
    const { value } = evt.target;
    // c) use the `update` callback coming in through props
    update(name, value);

  }

  const onSubmit = evt => {
    // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    evt.preventDefault();
    // c) use the `submit` callback coming in through props
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>Email
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
          />

        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          {/* 🔥 STEP 5 - Make dropdown for role. */}
          <select
            value={values.role}
            name='role'
            onChange={onChange}
          >
            <option value=''>Select an Option</option>
            <option value='BackEnd'>BackEnd</option>
            <option value='FrontEnd'>FrontEnd</option>
            <option value='Full-Stack'>Full Stack</option>
          </select>
        </label>

        <div className='submit'>
          <button disabled={!values.name || !values.email || !values.role}>submit</button>
        </div>
      </div>
    </form>
  )
}
