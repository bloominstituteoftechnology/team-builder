import React from "react";

export default function FriendForm(props) {
	// THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
	const { values, update, submit } = props;

	const onChange = (evt) => {
		// 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
		// a) pull the name of the input from the event object
		// b) pull the value of the input from the event object
		const { name, value } = evt.target;
		// c) use the `update` callback coming in through props
		update(name, value);
	};

	const onSubmit = (evt) => {
		// 🔥 STEP 7 - IMPLEMENT the submit handler
		// a) don't allow the browser to reload!
		evt.preventDefault();
		// c) use the `submit` callback coming in through props
		submit();
	};

	return (
		<form className="form container" onSubmit={onSubmit}>
			<div className="form-group inputs">
				{/* ////////// TEXT INPUTS ////////// */}
				{/* ////////// TEXT INPUTS ////////// */}
				{/* ////////// TEXT INPUTS ////////// */}
				<label>
					Username
					{/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
					<input
						type="text"
						name="username"
						onChange={onChange}
						value={values.username}
						placeholder="Type A Username"
						maxLength="30"
					/>
				</label>

				<label>
					Email
					{/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
					<input
						type="email"
						name="email"
						onChange={onChange}
						value={values.email}
						placeholder="Type An Email"
						maxLength="30"
					/>
				</label>

				{/* ////////// DROPDOWN ////////// */}
				{/* ////////// DROPDOWN ////////// */}
				{/* ////////// DROPDOWN ////////// */}
				<label>
					Role
					{/* 🔥 STEP 5 - Make dropdown for role. */}
					<select name="role" value={values.role} onChange={onChange}>
						<option value="">---select role---</option>
						<option value="instructor">Instructor</option>
						<option value="student">Student</option>
						<option value="tl">Team Lead</option>
					</select>
				</label>

				<div className="submit">
					<button>submit</button>
				</div>
			</div>
		</form>
	);
}
