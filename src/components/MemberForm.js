import React, { useState, useEffect } from 'react'

export default function MemberForm(props){
	const { values, update, submit } = props

	const onChange = evt =>{
		const name = evt.target.name;
		const { value } = evt.target;
		update(name, value)
	}
	const onSubmit = evt =>{
		evt.preventDefault();
    	submit();
	}
	<label>Name
	<input
		type='text'
		name='name'
		value={values.name}
		onChange={onChange}
	/>
	</label>
	return(
		<form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
            maxLength='30'
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
        <label>Role
          <select
            value={values.role}
            name='role'
            onChange={onChange}
          >
          <option value='' >-- Select a Role --</option>
          <option value='Constructor'>Constructor</option>
          <option value='Front-End'>Front-End</option>
          <option value='CEO'>CEO</option>
		  <option value='Back-End'>Back-End</option>
          </select>
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
	)
}
