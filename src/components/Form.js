import React from "react";

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        // pull name of input from event object
        const name = evt.target.name;
        // pull value of input from event object
        const value = evt.target.value;
        // use the `update` callback coming in through props
        update(name, value);
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
                        placeholder="Enter your name here."
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Email
                    <input
                        placeholder="Enter your email here."
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>role
                    <select placeholder="Choose your role here." value={values.role} name="role" onChange={onChange} >
                        <option value=''>-- Select a Role --</option>
                        <option value="Front-End Developer">Front-End Developer</option>
                        <option value="Back-End Developer">Back-End Developer</option>
                        <option value="Full-Stack Developer">Full-Stack Developer</option>
                    </select>
                </label>
                <br></br>
                <div className='submit'>
                    <button disabled={!values.name || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    )
}