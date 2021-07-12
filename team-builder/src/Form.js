import React, {useState} from 'react'


// this module holds the form and input that will display on screen.
// all input should be held in state, dont forget

function Form(props) {

	const [teamMember, setTeamMember] = useState([{
    name: "",
    email: "",
    role: ""
	}])


	const handleChange = (e) => {
		setTeamMember({...teamMember, [e.target.name]:e.target.value})
	
	}

	

	return (
		<form className="col">
			<div className="row">
				<label
					htmlFor="name"
					className="form-label">
					Name:
				</label>
				<input
					id="name"
					type="text"
					className="form-control-lg"
					name="name"
					placeholder="enter your name"
					onChange={handleChange}
				/>
			</div>
			<div className="row">
				<label
					htmlFor="email"
					className="form-label">
					Email:
				</label>
				<input
					id="email"
					type="email"
					className="form-control-lg"
					name="email"
					placeholder="enter your email"
					onChange={handleChange}
				/>
			</div>
			<div className="row">
				<label
					htmlFor="email"
					className="form-label">
					Role:
				</label>
				<input
					id="role"
					type="text"
					className="form-control-lg"
					name="role"
					placeholder="what is your role?"
					onChange={handleChange}
				/>
			</div>
			<div className="d-grid gap-2 d-md-flex justify-content-md-end">
				<button type="submit" className="btn btn-sm btn-primary">Submit</button>
			</div>
			
		</form>
	)
}

export default Form