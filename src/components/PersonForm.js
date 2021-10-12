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

    // const initialFormValues = {
    //     username: '',
    //     email: '',
    //     role: '',
    // }
    
    return(
        <form className='personForm' onSubmit={onSubmit}>
            <div className='inputs'>
                <label> Username
                    <input 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        // submit={onSubmit}
                    />
                </label>
                <label> Email
                    <input 
                        type='text' //TODO: Change back to email
                        name='username'
                        value={values.email}
                        onChange={onChange}
                        // submit={onSubmit}
                    />
                </label>
                <label> Favorite Sport
                    <select
                        // type='uneeded'
                        name='role'
                        value={values.role}
                        onChange={onChange}
                    >
                        <option value=''>----Select a role-----</option>
                        <option value='Hockey'>Hockey</option>
                        <option value='Foosball'>Foosball</option>
                        <option value='Dodgeball'>Dodgeball</option>
                        <option value='Hackey Sack'>Hackey Sack</option>
                        
                    </select>
                </label>
                {/* <label> First Name
                    <input 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        // submit={onSubmit}
                    />
                </label>
                <label> Last Name
                    <input 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        // submit={onSubmit}
                    />
                </label> */}
                <div className='submit'>
                    <button>S U M B I T</button>
                </div>
            </div>
        </form>
    )
}