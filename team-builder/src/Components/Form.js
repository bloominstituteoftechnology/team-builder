import React from 'react';

export default function Form (props) {
    const { vals, update, submit } = props;

    const onChange = (evt) => {
        const name = evt.target.name
        const value = evt.target.value

        update (name,value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

return (
    <form className='Form' onSubmit={onSubmit}>
        <div className='inputs'>
            <label> Username
                <input
                type='text'
                name='username'
                value={vals.username}
                onChange={onChange}
                />
            </label>
            <label> Email
                <input
                type="text"
                name="email"
                value={vals.email}
                onChange={onChange}
                />
            </label>
            <label> Favorite Sport
                <select
                name='role'
                value={vals.role}
                onChange={onChange}
                >
                    <option value=''> -- Select a role -- </option>
                    <option value=''> Basketball </option>
                    <option value=''> Football </option>
                    <option value=''> Baseball </option>
                    <option value=''> Soccer </option>
                </select>
            </label>
            {/* <label> Username
                <input
                type="text"
                name="username"
                value={vals.username}
                update={onChange}
                submit={onSubmit}
                />
            </label> */}
            <div className="submit">
                <button>Submit</button>
            </div>
        </div>
    </form>
)
}