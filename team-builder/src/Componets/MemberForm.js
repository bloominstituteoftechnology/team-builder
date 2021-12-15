import React from 'react';
import "../App.css";

export default function MemberForm (props) {
    const { values, update, submit } = (props)

    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;

        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'></div>
            <label>
                Member Name:
                <input 
                name='name'
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
                 name='email'
                 value={values.email}
                 onChange={onChange}
                 type='email'
                 placeholder='Email'
                />
            </label>
            <label>
                Role:
                <select value={values.role} name='role' onChange={onChange}>
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

