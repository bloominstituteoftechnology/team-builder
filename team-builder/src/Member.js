import React from 'react'

function Member({ member }) {
	return (
		<div>
			{member.map(mate => {
				return (
					<div key="key">
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