import React from 'react';

export default  function PersonForm(props) {
    const { values, update, submit } = props;
    
    const onChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        update(name, value)
    }

    const onSubmit = (event) => {

    }

    // const initialFormValues = {
    //     username: '',
    //     email: '',
    //     role: '',
    // }
    
    return(
        <form className='personForm'>
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
                        

                    </select>
                </label>
                {/* <label> Username
                    <input 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        // submit={onSubmit}
                    />
                </label>
                <label> First name
                    <input 
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        // submit={onSubmit}
                    />
                </label> */}
            </div>
        </form>
    )
}