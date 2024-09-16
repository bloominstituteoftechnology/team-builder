import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Form({ setTeamValues, teamValues }){
    const [formValues, setFormValues] = useState({
        name:'', email:'', role: '',
    })
    const onValueChange = event => {
            setFormValues({
                ...formValues,
                [event.target.name]: event.target.value
            })
        
    }
    const onFormSubmit = event => {
        
        event.preventDefault() //this information's not going anywhere real, so i'm preventing the page from reloading when hitting the send button
        setTeamValues([...teamValues, formValues])

    }
    return (
        <form className="formComponent" onSubmit={onFormSubmit}>
            <input 
                type='text'
                value={formValues.name}
                placeholder="Teammate's First Name"
                onChange={onValueChange}
                name='name'
            />
            <input 
                type='email'
                value={formValues.email}
                placeholder="Teammate's E-Mail"
                onChange={onValueChange}
                name='email'
            />
            <select
                type='select'
                
                value={formValues.role}
                placeholder="Role in the Team"
                onChange={onValueChange}
                name='role'
            >
                <option value='Knight'>Knight</option>
                <option value='Ninja'>Ninja</option>
                <option value='Mage'>Mage</option>
                <option value='Monk'>Monk</option>
                </select>
            <input type='submit' />
        </form>
    )
}

export default Form;