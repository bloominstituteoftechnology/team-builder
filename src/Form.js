import React from 'react';


export default function Form ({values, update, submit}){
    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };
    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form inputs'>
                <label>
                    <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    />
                </label>
                <label>
                    <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='type an email...'
                    maxLength='30'
                    />
                </label>
                <label>
                    Role
                    <select name='role' values={values.role} onChange={onChange}>
                        <option value=''>--Select Role--</option>
                        <option value='front-end developer'>Front-End Developer</option>
                        <option value='back-end developer'>Back-end Developer</option>
                        <option value='designer'>Designer</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>


            </div>

        </form>
    );
}