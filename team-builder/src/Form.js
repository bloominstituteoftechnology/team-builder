import React, {useState} from 'react';

const Form = (props) => {

    const [formValue, setFormValues] = useState(
    {
        name: '',
        id: Date.now(),
        email: '',
        role: ''
    })
    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setFormValues({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    return(
        <form className = 'form-container' onSubmit  = {event => {
            event.preventDefault()
            props.newMember(formValue)
            setFormValues({
                name: '',
                id: Date.now(),
                email: '',
                role: ''
            })

        }}>
            <h2>Add a New Team Member</h2>
            <div className = 'form-inputs'>

                <label>Name:
                <input
                    type = 'text'
                    placeholder = 'Type Name Here'
                    maxLength  = '30'
                    name = 'name'
                    value = {formValue.name}
                    onChange = {changeHandler}
                    />   
                </label>

                <label>Email:
                <input
                    type = 'email'
                    placeholder = 'Type email Here'
                    maxLength  = '30'
                    name = 'email'
                    value = {formValue.email}
                    onChange = {changeHandler}
                    />   
                </label>

                <label>Role:
                <input
                    type = 'text'
                    placeholder = 'Type Role Here'
                    maxLength  = '30'
                    name = 'role'
                    value = {formValue.role}
                    onChange = {changeHandler}
                    />   
                </label>


            </div>
            <div className = 'form-submit'>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form;

