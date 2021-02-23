import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    return (
        <div className="Form container">
            <form onSubmit={onSubmit}>
                <label>
                    Name:
                    <input
                        type='text'
                        name='Name'
                        value={values.Name}
                        placeholder='enter your name here'
                        maxLength='40'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type='email'
                        name='Email'
                        value={values.Email}
                        placeholder='enter your email here'
                        maxLength='40'
                        onChange={onChange}
                    />
                </label>
                <label>
                    Role:
                    <input
                        type='text'
                        name='Role'
                        value={values.Role}
                        placeholder='enter your role here'
                        maxLength='40'
                        onChange={onChange}
                    />
                </label>
                <div className='submit button'>
                    <button disabled={!values.Name || !values.Email || !values.Role}>submit</button>
                </div>
            </form>
        </div>
    )
}