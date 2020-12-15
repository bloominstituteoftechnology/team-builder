import React from 'react'

export default function Form(props) {
  const { name, email, role } = props;
  return (
    <div>
      <form>
        <label>
          Name: 
          <input 
            name='name'
            type='text'
            placeholder='type your first name...'
            maxLength='20'
            value={name}
          />
        </label>
        <label>
          Email: 
          <input 
            name='email'
            type='email'
            placeholder='type your email address...'
            maxLength='30'
            value={email}
          />
        </label>
        <label>
          Role:   
          <select name="role" value={role}>
            <option value="">------select role------</option>
            <option value="instructor">Backend Engineer</option>
            <option value="student">Frontend Engineer</option>
            <option value="tl">Designer</option>
          </select>
        </label>
        <div class='submit'>
          <input type="submit" value="Submit" onClick={event=> event.preventDefault()}/>
        </div>
      </form>
    </div>
  )
}
