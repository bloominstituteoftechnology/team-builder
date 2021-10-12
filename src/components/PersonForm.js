import React from 'react';

export default  function PersonForm(props) {
    const { values, update, submit } = props;
    
    const onChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        update(name, value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        submit()
    }
    
    return(
        <form className='personForm' onSubmit={onSubmit}>
            <div className='inputs'>
                <label> Username
                    <input 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        placeholder='Enter Username'
                    />
                </label>
                <label> Email
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                        placeholder='Enter Email'
                    />
                </label>
                <label> Favorite Sport
                    <select
                        name='role'
                        value={values.role}
                        onChange={onChange}
                    >
                        <option value=''>----Select a role-----</option>
                        <option value='Hockey'>Hockey</option>
                        <option value='Foosball'>Foosball</option>
                        <option value='Dodgeball'>Dodgeball</option>
                        <option value='Hackey-Sack'>Hackey-Sack</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>S U M B I T</button>
                </div>
            </div>
        </form>
    )
}

