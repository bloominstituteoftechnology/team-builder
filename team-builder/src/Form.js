import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Name
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    placeholder='Type in a name'
                    maxLength='30'
                    onChange={onChange}
                />
            </label>
            <label>Email
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    maxLength='50'
                    placeholder='Type in an email'
                    onChange={onChange}
                />
            </label>
            <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Position --</option>
                    <option value=''>Foot Masseuse</option>
                    <option value=''>Back Masseuse</option>
                    <option value=''>Head Masseuse</option>
                    <option value=''>Aromatherapist</option>
                </select>
            </label>
        </div>
    </form>
)

}