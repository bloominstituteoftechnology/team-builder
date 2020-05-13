import React, { useState } from 'react';

function Form(props) {
    const [value, setValue] = useState ({name: "", email:"", role: ""});

    const handleChange = event => {
        event.persist();
        setValue(() => ({ ...value, [event.target.name]: event.target.value}));
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("This should update the state in App with", value);
        props.addMember(value);
        setValue({ name: "", email: "", role: ""});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Name"
                value={value.name}
                onChange={handleChange}
            />
                <input
                type="text"
                name="email"
                placeholder="Email"
                value={value.email}
                onChange={handleChange}
            />
                <input
                type="text"
                name="role"
                placeholder="Role"
                value={value.role}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;