import React from 'react'

export default function TeamMemberForm(props) {
    const { values, update, submit } = props

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
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Username
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        maxLength="30"
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Alumni">Alumni</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}