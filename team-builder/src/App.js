import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from './Components/MemberForm';
import MemberList from './Components/MemberList';

function App() {
	const [ members, setMember ] = useState([
		{
			id: 1,
			name: 'John Smith',
			email: 'jsemail@mail.com',
			role: 'student'
		}
	]);
	const addNewMember = (member) => {
		const newMember = {
			id: Date.now(),
			name: member.name,
			email: member.email,
			role: member.role
		};
		setMember([ ...members, newMember ]);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
