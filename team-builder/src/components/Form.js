import React from 'react'


export default function Form(props) {
    // const {callbacks to make form work} = props
    const {update, values, submit} = props
    // Callbacks will go here
    const onChange = (evt) => {
        const {name, value} = evt.target
        update(name, value)
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>
                    Name:
                    <input
                    type="text"
                    name="Name"
                    value={values.name}
                    placeholder="Put yours here, dummy"
                    maxLength="25"
                    onChange={onChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                    type="text"
                    name="Email"
                    value={values.Email}
                    maxLength="30"
                    placeholder="@yomomma.com"
                    onChange={onChange}
                    />
                </label>
                <label>
                    Role:
                    <input
                    type="text"
                    name="Role"
                    value={values.Role}
                    placeholder="No experience :/"
                    maxLength="40"
                    onChange={onChange}
                    />
                </label>
                <div className='submit'>
                    <button >Submit</button>
                </div>
            </div>
        </form>
    )
}