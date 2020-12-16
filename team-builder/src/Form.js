import React from 'react'

export default function Form (props) {
    const { values, update, submit } = props

    const onChange = (evt) => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className="form containter" onSubmit={onSubmit}>
            <div className="form inputs">
                <label>
                    Name
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your Name"
                        maxLength="30"
                        value={values.name}
                        onChange={onChange}
                    /> 
                </label>
                <label>
                    Email
                    <input
                        name="email"
                        type="text"
                        placeholder="Enter your email address"
                        maxLength="30"
                        value={values.email}
                        onChange={onChange}
                    /> 
                </label>
                <label>
                    Role
                <select 
                    name="role" 
                    value={values.role}
                    onChange={onChange}
                >
                    <option value="">----------Select Role----------</option>
                    <option 
                        value="backend engineer">Backend Engineer</option>
                    <option value="frontend engineer">Frontend Engineer</option>
                    <option value="designer">Designer</option>
                </select>
                </label>
                
                <div className="submit">
                    <button>submit</button>
                </div>
            </div>
        </form>
    )

}