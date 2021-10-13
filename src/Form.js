import React from 'react'

export default function Form(props) {

    const { values, update, submit, errorText } = props

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault()
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>{errorText}</h2>
            <div>
                <label>Username
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        maxLength='30'
                        placeholder='Enter username'
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                        placeholder='Enter an email'
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''> Select a role </option>
                        <option value='frontend engineer'>Frontend Engineer</option>
                        <option value='backend engineer'>Backend Engineer</option>
                        <option value='designer'>UX Designer</option>
                        <option value='manager'>Project Manager</option>
                        <option value='data engineer'>Data Engineer</option>
                    </select>
                </label>
                <button>submit</button>
            </div>
        </form>
    )
}