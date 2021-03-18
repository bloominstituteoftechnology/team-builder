import React from 'react'

export default function MemberForm(props) {
    const { values, update, submit} = props

    const onChange = event => {
        const {name, value } = event.target
        update(name, value)
    }
    
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input 
                        type='text'
                        value={values.name}
                        placeholder="Name"
                        name='name' maxLength='25'
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                        type="email"
                        value={values.email}
                        placeholder="Email"
                        name="email"
                        maxLength="50"
                        onChange={onChange}
                    />
                </label>

                <label>Role
                    <select name='role' onChange={onChange} value={values.role}>
                        <option>Artist</option>
                        <option>Engineer</option>
                        <option>Producer</option>
                    </select>
                </label>
            
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}