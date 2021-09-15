export default function Form(props) {
	return (
		<div>
			<h2>Member Form</h2>
			<Form onSubmit={submit}>
				<input
					type='text'
					placeholder="Name"
					name="name"
					value={formValues.name}
					onChange={change}
				/>
				<input
					type='text'
					placeholder="Role"
					name="role"
					value={formValues.role}
					onChange={change}
				/>
				<input type='submit' value='submit'/>
			
			</Form>
		</div>
	)
}