import React from 'react';
import styled from 'styled-components';

export default function Team (props) {
	const { team, pickMemberToEdit } = props;
	
	const editThisMember = evt => {
		pickMemberToEdit(evt.target.previousElementSibling.innerText)
	}

	return (
		<div>
			<h2>Current Team:</h2>
			<Gallery>
				{team.map(member => {
					return (
						<Card key={member.email}>
							<h4>{member.name}, {member.role}</h4>
							<p>{member.email}</p>
							<button onClick={editThisMember} style={{width:'30%'}}>Edit</button>
						</Card>
				)})}
			</Gallery>
		</div>
	)
}

const Card = styled.div`
	border-radius: 3px;
	border: 1px solid black;
	background-color: lightgray;
	width: 15%;
	display: flex;
	/* justify-content:space-between; */
	flex-flow: column;
	margin:5px;

	h4 {
		margin-bottom: 0;
	}
`

const Gallery = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`