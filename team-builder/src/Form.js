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
        console.log('form submitted')
    };


    return (
        <form>
            <h3>Employee Name is {user.name}</h3>
            <h3>The Employee Email is{user.email}</h3>
            <h3>The Role is {user.role}</h3>

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

            <div className="employee-role">
                <label htmlFor = 'roleSelections'>Roles: </label>
                    <select 
                        value={user.roles}
                        onChange={handlerUpdate}
                        id='roleSelections' 
                        name= 'roles'>
                        <option value='Software'>Software Developer
                        </option>
                        
                        <option value='Claymation Animator'>Claymation Animator
                        </option>

                        <option value='Ux Designer'>UX Designer
                        </option>

                        <option value='Plaster Mold Caster'>Plaster Mold Caster
                        </option>

                        <option value='Cat Cafe Associate'>Cat Cafe Associate
                        </option>

                        <option value='Matcha Tea Expert'>Matcha Tea Expert Barista
                        </option>
                    </select>
            </div>
        </form>
    )
}

export default Form
