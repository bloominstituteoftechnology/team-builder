import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Team Member Name
                    <input
                        type="text"
                        name="name"
                        onChange={onChange}
                        value={values.name}
                        placeholder="type a name..."
                        maxLength="30"
                    />
                </label>
                <label>Email
                    <input
                        type="email"
                        name="email"
                        onChange={onChange}
                        value={values.email}
                        placeholder="enter an email..."
                        maxLength="40"
                    />
                </label>
                <label>Role
                    <select
                        name="role"
                        value={values.role}
                        onChange={onChange}
                    >
                        <option value="">-- Select a Role --</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}
