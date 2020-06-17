import React from 'react'

export default function Form(props){
    const {
        values,
        onInputChange,
        onSubmit
    } = props

    return (

        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a Team Member</h2>
                <button>submit</button>
            </div>
            
            <div>
                <label>Username:
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onInputChange}
                    />
                </label>

                <label htmlFor='emailInput'>Email:
                    <input
                        id='emailInput'
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                    />
                </label>

                <label>Role
                    <select
                        name="role"
                        value={values.role}
                        onChange={onInputChange}
                    >
                        <option value=''>-- Select a Role --</option>
                        <option value='Front End'>Front End</option>
                        <option value='Back End'>Back End</option>
                        <option value='Middle End'>Middle End</option>
                    </select>
                </label>
            </div>

        </form>
    )
}