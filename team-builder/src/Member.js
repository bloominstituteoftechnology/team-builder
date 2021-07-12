import React from 'react'

function Member({ member }) {
	return (
		<div>
			{member.map((mate, key) => {
				return (
					<div key={key}>
						<h2>Name: {mate.name}</h2>
						<p>Email: {mate.email}</p>
						<p>Role: {mate.role}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Member