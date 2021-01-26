import React from 'react';

export default function Team (props) {
    const { team } = props;

    return (
        <div>
            <h2>Current Team:</h2>
            {team.map((member,id) => {
              return (
								<div key={id}>
                	<h4>{member.name}, {member.role}</h4>
									<p>{member.email}</p>
									<br/>
								</div>
						)})}
        </div>
    )
}