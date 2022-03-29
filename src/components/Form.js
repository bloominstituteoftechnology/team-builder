import React from 'react';

export default function Form(props) {

const {values, update, submit} = props;

const onChange= evt => {
    const name=evt.target.name;
    const {value} = evt.target;
    update(name,value)
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

return (
    <form className = 'form' onSubmit={onSubmit}>
    <h2>Join our company today!</h2>
        <label>Name <input 
            type='text'
            name='name'
            value={values.name}
            placeholder='Type your name here.'
            maxLength='30'
            onChange={onChange}
        />


        </label>
        <label>Email <input 
            type='email'
            name='email'
            value={values.email}
            placeholder='Type your email here.'
            onChange={onChange} 
        />
        </label>

        <label>Role <input 
            type='text'
            name='role'
            value={values.role} 
            placeholder='Type desired role here.'
            onChange={onChange}>
        
        </input>
        </label>

        <div className='submit'>
            <button>Submit</button>
        </div>
    </form>
)
}