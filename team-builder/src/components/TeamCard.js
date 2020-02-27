import React from 'react';

//Create card
const TeamCard = props => {

	return(

		<div>
			{props.teamMembers.map(card => (
				<div key={card.id}>
					<h1>{card.name}</h1>
					<h3>{card.email}</h3>
					<h4>{card.role}</h4>
				</div>
			))}
		</div>
	);
};

export default TeamCard;