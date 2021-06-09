import React from 'react'

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target    
        update(name,value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
return (
    <form className='form container' onSubmit={ onSubmit }>
        <div className='form-inputs'>
            <label> Name: 
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Your Name Here"
                    onChange={ onChange }
                />
            </label>

            <label> Email: 
                <input
                    type="text"
                    name="email"
                    value={values.email}
                    placeholder="Your email Here"
                    onChange={ onChange }
                />
            </label>

            <label> Role: 
                <input
                    type="text"
                    name="role"
                    value={values.role}
                    placeholder="Your role Here"
                    onChange={ onChange }
                />
            </label>

            <div className='submit'>
                <button>submit</button>
            </div>

        </div>
    </form>
)


}