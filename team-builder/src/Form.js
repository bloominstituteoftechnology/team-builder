import React, { useState } from 'react'

const Form = props => {
    //States
    const [user, setUser] = useState({
        name: '',
        email: '',
        roles: ''
    });

    //Events
    const handlerUpdate = event => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
        console.log(event.target.name);
        console.log(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        props.addNewEmployee(user);
        setUser({ name: '', email: ''})
        console.log('form submitted')
    };


    return (
        <form onSubmit={handleSubmit}>

            <div className="employee-name">
                <label htmlFor= 'nameInput'>Name: </label>
                    <input
                        onChange={handlerUpdate}
                        placeholder= 'Name'
                        id= 'nameInput'
                        name= 'name'
                        type= 'text'
                        value={user.name}
                    />
            </div>

            <div className="employee-email">
                <label hrmlFor='emailInput'>Email: </label>
                    <input 
                        onChange={handlerUpdate}
                        placeholder= 'Email'
                        id= 'emailInput'
                        name= 'email'
                        type= 'text'
                        value={user.email}
                    />
            </div>

            <div className="employee-roles">
                <label htmlFor='roleSelections'>Roles: </label>
                    <select
                        onChange={handlerUpdate}
                        id='roleSelections'
                        name='roles'
                        value={user.roles}>

                           
                            
                            <option value='Software'>Software Developer
                            </option>

                            <option value='Claymation Animator'>Claymation Animator
                            </option>

                            <option value='UX Designer'>UX Designer
                            </option>

                            <option value='Frontend Developer'>Frontend Developer
                            </option>

                            <option value='Special Effects Artist'>Special Effects Artist
                            </option>

                            <option value='Cat Cafe Associate'>Cat Cafe Associate
                            </option>

                            <option value='Matcha Tea Expert'>Matcha team Expert
                            </option>
                    </select>
            </div>

          
                <button type='submit'>Add Employee</button>
        </form>
    )
}

export default Form
