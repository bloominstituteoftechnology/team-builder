import React from 'react'


export default function TeamForm(props) {

    const { values, update, submit } = props

    const onChange = e => {

        const name = e.target.name;

        const value = e.target.value;

        update(name, value);
    }

    const onSubmit = e => {

        console.log('Testing submit func')
        e.preventDefault();

        submit();

    }

    return (
        <form className='container' onSubmit={onSubmit}>
        <div className='form-inputs'>
            <label>username
                <input
                    name='username'
                    type='text'
                    placeholder='enter username'
                    maxLength='35'
                    value={values.username}
                    onChange={onChange}/>
            </label>
            <label>Email
                <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='enter email address'>
                </input>
                </label>
            
            <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>---Select from the following---</option>
                    <option value='Junior Web Developer'>Junior Developer</option>
                    <option value='Senior Web Developer'>Senior Developer</option>
                    <option value='Lead Web Developer'>Lead Developer</option>
                </select>
            </label>
            
            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>
    )

}