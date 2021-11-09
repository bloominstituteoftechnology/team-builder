import React from 'react';

const TeamForm = (props) => {

    const onChange = evt => {
        const { name, value } = evt.target;

        props.onChange(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();

        props.submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <label>Name
                <input type='text' 
                name='name' 
                value={props.values.name}
                onChange={onChange}
                maxLength= '35'
                />
            </label>

            <label>Email
                <input
                type='email'
                name='email'
                value={props.values.email}
                onChange={onChange}
                />
            </label>

            <label>Role
                <select name='role' value={props.values.role} onChange={onChange}>
                    <option value=''> --Select a Role--</option>
                    <option value='front-end-dev'>Front end Developer</option>
                    <option value='back-end-dev'>Back end Developer</option>
                    <option value='full-stack-dev'>Full Stack Developer</option>
                </select>
            </label>

            <div className='submit'>
                <button>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default TeamForm;