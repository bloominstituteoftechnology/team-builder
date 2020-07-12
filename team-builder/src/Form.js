import React from 'react'

const Form = (props) => {

    const { value, onInputChange, onSubmit } = props
    
    return(
        <from className= 'form-container' onSubmit={onSubmit}>
        <div className = 'form-submit'>
            <h2>Add a Team Member</h2>
            <button>Submit</button>
        </div>

        <div className = 'form-inputs'>
            <h4>Member info</h4>
            <label>Name;
                <input
                type = 'text'
                placeholder = 'Type name here'
                maxLength = '30'
                name = 'name'
                value = {value.name}
                onChange = {onInputChange}
                />
            </label>

        </div>
    </from>
    )
}
export default Form;


