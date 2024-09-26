import React from 'react'

export default function Form(props) {
const { values, update, submit } = props

const onChange = evt => {
const inputName = evt.target.name
const inputValue = evt.target.value
update(inputName, inputValue)
}

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

return (
<form className='form container' onSubmit={onSubmit}>
    <div className='form-group inputs'>
        <label>Name 
            <input type="text" name="name" value={values.name} onChange={onChange} placeholder="type a name" />
        </label>

        <label>Email  
            <input type="email" name="email" value={values.email} onChange={onChange} placeholder="your pro email" />
        </label>

        <label>Role 
            <select name="role" value={values.role} onChange={onChange}>
                <option value="">--select your role--</option>
                <option value="jr-engineer">jr engineer</option>
                <option value="mid-level engineer">mid-lever engineer</option>
                <option value="senior-level engineer">senior-level engineer</option>
            </select>
        </label>
    <div className='submit'>
        <button>Submit</button>
    </div>
    </div>
</form>
)
}