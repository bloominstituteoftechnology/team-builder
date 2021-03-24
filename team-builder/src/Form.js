import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form>
            <label>
                <input 
                name='username'                    
                type='text'
                value={values.name}
                placeholder='First Name'
                onChange={onChange}
                />
                <input 
                name='email'
                type='text'   
                value={values.email}
                placeholder='Email'
                onChange={onChange}             
                />
                <input 
                name='role'                    
                type='text'
                value={values.role}
                placeholder='Role'
                onChange={onChange}
                />
            </label>
        </form>
    )
}