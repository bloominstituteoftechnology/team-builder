import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;
    const { values, updates, submit } = props;

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        updates(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }

return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Name
                <input
                    type='text'
                    name='name'
                    value={value.name}
                    value={values.name}
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
                    <option value='Feet Masseuse'>Feet Masseuse</option>
                    <option value='Back Masseuse'>Back Masseuse</option>
                    <option value='Head Masseuse'>Head Masseuse</option>
                    <option value='Aromatherapist'>Aromatherapist</option>
                </select>
            </label>
            <div>
                <button>submit</button>
            </div>
        </div>
    </form>
)
}
