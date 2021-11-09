import React from "react";

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        // pull name of input from event object
        const userName = evt.target.userName;
        // pull value of input from event object
        const { value } = evt.target;
        // use the `update` callback coming in through props
        update(userName, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>role
                    <select value={values.role} name="role" onChange={onChange} >
                        <option value=''>-- Select a Role --</option>
                        <option value="Front-End Developer">Front-End Developer</option>
                        <option value="Back-End Developer">Back-End Developer</option>
                        <option value="Full-Stack Developer">Full-Stack Developer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled={!values.name || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    )
}