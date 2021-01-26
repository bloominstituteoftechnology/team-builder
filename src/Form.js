import React from 'react';

export default function Form (props) {
	const { name, email, role } = props.values;

	const handleChange = (evt) => {
		const { name, value } = evt.target
		console.log('name',name,'value',value)
		props.update(name, value)
	}

	const handleSubmit = (evt) => {
		evt.preventDefault()
		props.submit()
	}

	return (
		<div>
			<h2>Add a new member to the team:</h2>
			<form onSubmit={handleSubmit}>
				<label> Name: 
					<input 
						type='text'
						name='name'
						value={name}
						onChange={handleChange}
					/>
				</label>
				<label> Email: 
					<input 
						type='email'
						name='email'
						value={email}
						onChange={handleChange}
					/>
				</label>
				<label> Role: 
					<select
						name='role'
						value={role}
						onChange={handleChange}
					>
						<option value=''>-----select role-----</option>
						<option value='manager'>Manager</option>
						<option value='front-end developer'>Front-end developer</option>
						<option value='back-end developer'>Back-end developer</option>
						<option value='quality assurance'>Quality assurance</option>
					</select>
				</label> 
				<button>Submit</button>
			</form>
		</div>
	)
}