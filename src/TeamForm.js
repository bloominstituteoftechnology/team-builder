import React from 'react';

const TeamForm = (props) => {

    const handleChange = evt => {
        const { name, value } = evt.target;

        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        props.submit();
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <label>Name
                <input type='text'
                placeholder='Enter your name here!' 
                name='name' 
                value={props.values.name}
                onChange={handleChange}
                maxLength= '35'
                />
            </label>

            <label>Email
                <input
                type='email'
                placeholder='Enter your email here!'
                name='email'
                value={props.values.email}
                onChange={handleChange}
                />
            </label>

            <label>Role
                <select placeholder='Enter your role here!' name='role' value={props.values.role} onChange={handleChange}>
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