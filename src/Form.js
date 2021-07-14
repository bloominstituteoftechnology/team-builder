import React, { useState } from "react";

const dummyData = [
	{ name: "Ted", email: "ted@ted.com", role: "FrontEnd Engineer" },
];

const Form = () => {
	const [people, setPeople] = useState(dummyData);
	const defaultNewPerson = { name: "", email: "", role: "" };
	const [newPerson, setNewPerson] = useState(defaultNewPerson);

	const inputHandler = (e) => {
		const person = {
			...newPerson,
			[e.target.name]: e.target.value,
		};
		setNewPerson(person);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setPeople([...people, newPerson]);
	};
	return (
		<div>
			<h1>People Form</h1>
			{people.map((person, i) => {
				return (
					<div key={i}>
						Name: {person.name} Email: {person.email} Role: {person.role}
					</div>
				);
			})}
			<form onSubmit={submitHandler}>
				<label>
					{" "}
					Name
					<input
						type="text"
						onChange={inputHandler}
						placeholder="Name"
						name="name"
						value={newPerson.name}
					/>
				</label>
				<label>
					{" "}
					Email
					<input
						type="text"
						onChange={inputHandler}
						placeholder="Email"
						name="email"
						value={newPerson.email}
					/>
				</label>
				<label>
					{" "}
					Role
					<select
						type="text"
						onChange={inputHandler}
						placeholder="Role"
						name="role"
						value={newPerson.role}
					>
						<option value="">-- Select a Role --</option>
						<option value="Backend Engineer">Backend Engineer</option>
						<option value="FrontEnd Engineer">FrontEnd Engineer</option>
						<option value="Designer">Designer</option>
					</select>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Form;
