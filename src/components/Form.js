import React from 'react';

const Form = (props) =>{
    const {values, update, submit} = props

    const change = evt => {
        console.log(evt)
        const {value, name} = evt.target
        update(name, value);
    }

    const submitter = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <form onSubmit={submitter}>
            <div className='input-container'>
                <label> Name
                <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={change}
                        placeholder="Type a name..."
                        maxLength='20'
                    />
                </label>
                <label> Email
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={change}
                        placeholder="Type an email..."
                        maxLength='40'
                    />
                </label>
                <label> Role
                    <select value={values.role} name="role" onChange={change}>
                        <option value=''> Please pick a Role. </option>
                        <option value='Leader'>Leader</option>
                        <option value='Official Backflip Engineer'>Official Backflip Engineer</option>
                        <option value='Your Mom'>Your Mom</option>
                        <option value='Funny Hat Man/Woman/Other'>Funny Hat Man/Woman/Other</option>
                    </select>
                </label> 
            </div>

            <div className='submit' >
                <button disabled={!values.name || !values.email || !values.role}>Submit</button>
            </div>
        </form>
    )
}

export default Form;