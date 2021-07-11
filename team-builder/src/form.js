

export default function Form(props) {

    const { formValues, update, submit } = props;

    const onChange = evt => {
        // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        const name = evt.target.name
        // b) pull the value of the input from the event object
        const value = evt.target.value
        // c) use the `update` callback coming in through props
        update(name, value)
    }

    const onSubmit = evt => {
        // 🔥 STEP 7 - IMPLEMENT the submit handler
        // a) don't allow the browser to reload!
        evt.preventDefault()
        // c) use the `submit` callback coming in through props
        submit()
    }


    return (
        <div>
            <form onSubmit={onSubmit} >
                <label htmlFor="name">Name:
                    <input onChange={onChange} type="text" placeholder='Enter Name' name='username' id='name' value={formValues.username} />
                </label>
                <label htmlFor="email">Email:
                    <input onChange={onChange} type="email" placeholder='Enter Email' name='email' id='email' value={formValues.email} />
                </label>
                <label htmlFor="role">
                    <select name='role' onChange={onChange} value={formValues.role}>
                        <option value="">-- Select a Role --</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Full-stack">Full-stack</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}