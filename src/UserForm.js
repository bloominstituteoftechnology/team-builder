import React from 'react';

export default function UserForm(props)
{
    // THESE ARE THE **EXACT PROPS** UserForm EXPECTS!!!
    const { values, update, submit } = props;

    const onChange = (event) =>
    {
        // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
        // a) pull the name of the input from the event object
        const name = event.target.name;
        // b) pull the value of the input from the event object
        const value = event.target.value;
        // c) use the `update` callback coming in through props
        update(name, value);
    };

    const onSubmit = (event) =>
    {
        // 🔥 STEP 7 - IMPLEMENT the submit handler
        // a) don't allow the browser to reload!
        event.preventDefault();
        // c) use the `submit` callback coming in through props
        submit();
    };

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Username
                    {/* 🔥 STEP 3 - Make an input of type `text` for username.
              Controlled inputs need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler fires to change app state. */}
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        placeholder="Type in a username"
                        maxLength="30"
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        maxLength="50"
                        placeholder="Type in an email"
                        onChange={onChange}
                    />
                </label>

                {/* ////////// DROPDOWN ////////// */}
                {/* ////////// DROPDOWN ////////// */}
                {/* ////////// DROPDOWN ////////// */}
                <label>Role
                    {/* 🔥 STEP 5 - Make dropdown for role. */}
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Student'>Student</option>
                        <option value='Teacher'>Teacher</option>
                        <option value='Manager'>Manager</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    );
}