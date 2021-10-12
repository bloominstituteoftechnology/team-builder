
function Form(props){

    const { values, update, submit} = props

    const onChange = evt => {
        const name = evt.target.name;

        const value = evt.target.value;

        update(name, value);
    }

const onSubmit = evt => {
    evt.preventDefault()

    submit();
}


    return (
        <form onSubmit={onSubmit}>
        
            <h2>Enter New Team Member</h2>
        
            <label>Name:
                <input 
                type="text"
                name="name"
                value={values.name}
                onChange={onChange}
                placeholder="Enter a Name"
                />
            </label>
            <label>Email:
           
                <input 
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Enter an email"
                />
            </label>
            <label>Role
          
            <select  name="role" onChange={onChange}>
                <option value="">Select a role</option>
                <option value="Front-end">Front-end</option>
                <option value="Back-end">Back-end</option>
                <option value="Full-stack">Full-Stack</option>
            </select>
            </label>
            <div className='submit'>
            <button>submit</button>
            </div>
        
        </form>
    )
}



export default Form;