import React from 'react';

export default function TeamForm(props){

    const { values, submit, update } = props;

    const onChange = (evt) =>{
        const { name, value } = evt.target;
        update(name, value)
    }

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    }


    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label> First Name
                    <input 
                        name='firstname'
                        type='text'
                        placeholder='Enter First Name'
                        maxLength='15'
                        value={values.firstname}
                        onChange={onChange}
                    />
                </label>

                <label> Last Name
                    <input 
                        name='lastname'
                        type='text'
                        placeholder='Enter last Name'
                        maxLength='15'
                        value={values.lastname}
                        onChange={onChange}
                    />
                </label>

                <label> Email
                    <input 
                        name='email'
                        type='email'
                        placeholder='Enter Email'
                        maxLength='35'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label> Role
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value='' >-----Select Role-----</option>
                        <option value='backend' >Backend Engineer</option>
                        <option value='frontend' >Frontend Engineer</option>
                        <option value='designer' >Designer</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )

}