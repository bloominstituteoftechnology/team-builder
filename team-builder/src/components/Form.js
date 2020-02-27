import React, { useState } from 'react';

const Form = props => {

	//Card structure
	const [card, setCard] = useState({
		name: "",
		email: "",
		role: "",
	});

	//Keeps track of changes
	const eventHandler = event => {
		console.log(event);
		setCard({...card, [event.target.name]: event.target.value});
	};

	//Submits data and creates new card
	const submitForm = event => {
		event.preventDefault();
		//addMember is defined in app.js
		props.addMember(card);
	};

	return(
		<div>
			<form onSubmit={submitForm}>

				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" 
				onChange={eventHandler} placeholder="Name" />

				<label htmlFor="email">Email</label>
				<input type="text" id="email" name="email"
				onChange={eventHandler} placeholder="Email" />

				<label htmlFor="role">Role</label>
				<input type="text" id="role" name="role"
				onChange={eventHandler} placeholder="Role" />

				<button type="submit">Submit</button>
				
			</form>
		</div>
	);
}

export default Form;