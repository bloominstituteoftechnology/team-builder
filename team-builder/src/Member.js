import React from 'react'

function Member({ member }) {
	console.log(member)
	return (
		<div>
			{member.map(mate => {
				return (
					<div>
						<h2>{mate.name}</h2>
						<p>{mate.email}</p>
						<p>{mate.role}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Member