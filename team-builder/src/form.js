import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
`;

export default function FormInput(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h1>Name</h1>
                    <StyledInput
                    onChange={onChange}
                    value={values.name}
                    name='name'
                    type='text'
                    placeholder='Name'
                    maxLength='50'
                    />
            </div>
            <div>
                <h1>Email</h1>
                    <StyledInput
                    onChange={onChange}
                    value={values.email}
                    name='email'
                    type='text'
                    placeholder='Email'
                    maxLength='50'
                    />
            </div>
            <div>
                <h1>Role</h1>
                <select 
                    onChange={onChange}
                    name='role'
                    value={values.role}>
                    <option></option>
                    <option>Backend Engineer</option>
                    <option>Frontend Engineer</option>
                    <option>Designer</option>
                </select>
            </div>
            <div>
                <button>submit</button>
            </div>

        </form>
    )
}