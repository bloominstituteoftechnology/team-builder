import React, { useState } from 'react';


export default function Form(props) {
    const { values, update, submit } = props;

const onChange = evt => {
    const { name, value } = evt.target;
    update(name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

return (
    <form className='form-container' onSubmit={onSubmit}>
        <div className='form-group-inputs'>
            <label>Name
                <input 
                type='text' 
                value={values.name} 
                onChange={onChange} />
            </label>
            <label>Email
                <input 
                type='email' 
                name='email'
                value={values.email} 
                onChange={onChange} />
            </label>
            <label> Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select A Role --</option>
                    <option value='Fontend-Engineer'>Fontend Engineer</option>
                    <option value='Backend-Engineer'>Backend Engineer</option>
                    <option value='Design-Engineer'>Design Engineer</option>
                </select>
            </label>

            <div className='submit'>
                <button>Submit</button>
            </div>        
    </div>
</form> 
)

}