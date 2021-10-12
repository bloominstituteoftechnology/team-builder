import { useState } from 'react';

function Form (props) {

    const { values, updateForm, submitForm } = props
    console.log(values)
    const onChange = (evt) => {
        const { name, value } = evt.target
        updateForm(name, value)
    }

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        submitForm();
    }

    return(
        <form onSubmit={onSubmitForm}>
            <label>Name: 
                <input 
                type='text'
                name='name'
                placeholder='Enter a name'
                onChange={onChange}
                value={values.name}
                />
            </label>
            <br/>
            <label>Email: 
                <input 
                type='email'
                name='email'
                placeholder='Enter an email'
                onChange={onChange}
                value={values.email}
                />
            </label>
            <br/>
            <select
            name='role'
            onChange={onChange}
            value={values.role}
            >
                <option value=''>--Select a Role--</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Designer'>Designer</option>
                <option value='Product Manager'>Product Manager</option>
            </select>
            <br/>
            <button>Add an User</button>
        </form>
    )
}

export default Form