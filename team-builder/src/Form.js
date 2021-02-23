import React from 'react'


function Form(props) {
    const {values, update, submit} = props
    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <div>
            <h1>Add a new Member!</h1>
            <form onSubmit = {onSubmit}>
                <input name = "username" type = "text" onChange = {onChange} value = {values.username} placeholder = "Name..."/>
                <input name = "email" type = "text" onChange = {onChange} value = {values.email} placeholder = "Email..."/>
                <label>Role
                    <select name="role" onChange={onChange} value = {values.role}>
                        <option value=''>--- Select Role ---</option>
                        <option value='Developer'>Developer</option>
                        <option value='Artist'>Artist</option>
                    </select>
                </label>
                <button disabled={!values.username || !values.email || !values.role}>submit</button>
            </form>
        </div>
    );
}

export default Form;