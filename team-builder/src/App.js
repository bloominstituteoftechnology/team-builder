import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Member from './Member.js';

const initialFormValues = {
	name  : '',
	email : '',
	role  : ''
};

function App() {
	const [ teamMembers, setTeamMembers ] = useState([]);
	const [ formValues, setFormValues ] = useState(initialFormValues);

	const updateForm = (inputName, inputValue) => {
		setFormValues({
			...formValues,
			[inputName] : inputValue
		});
	};
	const submitForm = () => {
		let newMember = {
			name  : formValues.name.trim(),
			email : formValues.email.trim(),
			role  : formValues.role
		};
		if (!newMember.name || !newMember.email || !newMember.role) return;

		setTeamMembers([ ...teamMembers, newMember ]);
		setFormValues(initialFormValues);
	};

	return (
		<div className="App">
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
			<Form values={formValues} update={updateForm} submit={submitForm} values={{}} />
			{teamMembers.map((member) => {
				return <Member key={member.id} details={member} />;
			})}
		</div>
	);
}

export default App;
