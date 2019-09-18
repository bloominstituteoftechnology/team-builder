import React, { useState } from 'react';
import App from './App'

const initialFormValues = {
    name: '1',
    age: '2',
    role: '3',
};



function Form() {
    // passed in initialFormValues to the useState so that my state variable would use it as the initial value
    const [formValues, setFormValues] = useState(initialFormValues);

    const onNameChange = (e) => {
        setFormValues({
            ...formValues,
            name:e.target.value,
        })
    }

    const onAgeChange = (e) => {
        setFormValues({
            ...formValues,
            age:e.target.value,
        })
    }

    const onRoleChange = (e) => {
        setFormValues({
            ...formValues,
            role:e.target.value,
        })
    }

    return (<form>
        <label htmlFor='nameinput'>Name</label>
        <input
            value={formValues.name}
            onChange={onNameChange}
             />

        <label htmlFor='ageInput'>Age</label>
        <input
        
         value={formValues.age}
         onChange={onAgeChange} />

        <label htmlFor='roleInput'>Role</label>
        <input
            value={formValues.role}
            onChange={onRoleChange} />
    </form>
    )
}

export default Form;