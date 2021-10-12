import React from 'react';

export default function PersonForm(props) {

    const { vals, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    // const initialFormVals = {
    //     username: '',
    //     email: '',
    //     role: '',
    //   }

    return (
        <form className='Form' onSubmit={onSubmit}>
            <div className='input'>
                <label> Username
                    <input
                        type='text'
                        name='username'
                        value={vals.username}
                        onChange={onChange}
                        placeholder="Enter a username"
                    />
                </label>
                <label> Email
                    <input
                        type='text'
                        name='email'
                        value={vals.email}
                        onChange={onChange}
                        placeholder="Enter an email"
                        />
                </label>
                <label> Favorite Sport
                    <select
                        name='role'
                        value={vals.role}
                        onChange={onChange}
                    >
                        <option value=''> -- Select a role -- </option>
                        <option value='Basketball'> Basketball </option>
                        <option value='Baseball'> Baseball </option>
                        <option value='Cricket'> Cricket </option>
                        <option value='Foosball'> Foosball </option>
                        <option value='Tennis'> Tennis </option>

                    </select>
                </label>
                <div className="submit">
                    <button> Submit </button>
                </div>
            </div>
        </form>
    )
}