import React from 'react';

export default function MemberForm(props) {
    const { values, update, submit } = props;

    const onChange = e => {
        const name = e.target.name;
        const { value } = e.target;
        update(name, value);
    }

    const onSubmit = e => {
        e.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Member Name
                    <input 
                    name='memberName'
                    type='text'
                    placeholder='Type your name here!'
                    maxLength='30'
                    value={values.memberName}
                    onChange={onChange}
                    />
                </label>
            
                <label>Email
                    <input 
                    name='email'
                    type='email'
                    placeholder='Enter email here'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>

                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value ='backend engineer'>Backend Engineer</option>
                        <option value ='frontend engineer'>Frontend Engineer</option>
                        <option value ='designer'>Designer</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}
