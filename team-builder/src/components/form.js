import React from 'react'

export default function Form(props) {

    const { values, update, submit } = props;

    const onChange = evt => {
        const {name, value} = evt.target;
        update(name, value);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        placeholder='enter your name...'
                    ></input>
                </label><br/>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='enter your email...'
                    ></input>
                </label><br/>
                <label>Role
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>-----Select Role---</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='UX Designer'>UX Designer</option>
                        <option value='UI Designer'>UI Designer</option>
                        <option value='Quality Assurance'>Quality Assurance</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}