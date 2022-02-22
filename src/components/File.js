import React from 'react';

const handleChange = event => {
    const {name, value} = event.target;

    props.change(name, value);
}

const handleSubmit = event => {
    event.preventDefault();
    props.submit();
}

const Form = (props) => {
    return (
        <Form onSubmit={handleSubmit}>
        <label>Name
        <Form>
            <input
                placeholder='Enter name here'
                value={props.values.name}
                name='name'
                onChange={handleChange}
                />
        </Form>
        </label>,
        <label>
            <input
            placeholder='enter email here'
            value={props.values.email}
            name='email'
            onChange={handleChange}
            />
        </label>,
        <label>Role
            <input
            placeholder='Enter role here'
            value={props.values.role}
            name='role'
            onChange={handleChange}
            />
        </label>,
        <input type='submit' value='create your team' />
        </Form>
    )
}

export default Form;