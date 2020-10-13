import React from 'react';

export default function teamForm(props) {
	const { values, update, submit } = props;

	const onChange = (evt) => {
		const { name, value } = evt.target;
		update(name, value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	return (
		<form onSubmit={onSubmit}>
			<div>
				<label>
					Name
					<input
						type="text"
						name="name"
						email="email"
						value={values.name}
						onChange={onChange}
						placeholder="what's your name?"
						maxLength="20"
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						name="email"
						value={values.email}
						onChange={onChange}
						placeholder="enter your email"
						maxLength="50"
					/>
				</label>
				<label>
					Role
					<select name="role" value={values.role} onChange={onChange}>
						<option value="">-----select role----</option>
						<option value="Designer">UX/UI Designer</option>
						<option value="front-end">Front-End Engineer</option>
						<option value="back-end">Back-End Engineer</option>
						<option value="team-lead">Team-Lead</option>
					</select>
				</label>
				<div>
					<button>Submit</button>
				</div>
			</div>
		</form>
	);
}
