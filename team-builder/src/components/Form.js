import React from 'react';
import "../App.css";

const Form = (props) => {
    const { values, update, submit } = (props);

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    return (
        <form className='="form-container'>
            <label>
                Name:
                <input 
                values={values.memberName}
                onChange={onChange}
                className='form-input'
                type='text'
                placeholder="Name"
                />
            </label>
            <label>
                Email:
                <input 
                 value={values.email}
                 onChange={onChange}
                 className='form-input'
                 type='email'
                 placeholder='Email'
                />
            </label>
            <label>
                Role:
                <select 
                    name='role'
                    value={values.role}
                    onChange={onChange}
                    className='form-input'
                >
                    <option value=''>-- Select a Role --</option>
                    <option value='Backend Engineer'>Backend Engineer</option>
                    <option value='Frontend Engineer'>Frontend Engineer</option>
                    <option value='Designer'>Designer</option>
                    <option value='Planner'>Planner</option>
                </select>
                </label>
                <button className='form-input'>Add Team Member</button>
        </form>
    );
};

export default Form;