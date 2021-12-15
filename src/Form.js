import React from 'react'

export default function Form (props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        //console.log(evt.target.name);
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
                <label>Username: 
                    <input 
                        name='username'
                        type='text'
                        placeholder='Type your username here'
                        maxLength='30'
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <label>Email</label>
            </div>
        </form>
    )




}