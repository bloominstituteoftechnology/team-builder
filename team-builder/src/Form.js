import React from 'react'

export default function Form(props) {
    const { values, update, submit} = props

    const onChange = evt =>{
        const { name, value } = evt.target
        update( name, value )
    }

    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }


    return(
    <form className='form container' onSubmit={onSubmit}>
        <div className='form submit'>
            <h2>Join the Team</h2>
            <button
                disabled={!values.username || !values.email || !values.role}
                    >Submit
             </button>
        </div>
        <div className='form inputs'>
            <label htmlFor='usernameInput'>Username
                <input
                    id='usernameInput'
                    name='username'
                    type='text'
                    placeholder='Who art thou?'
                    maxLength= '20'
                    value= {values.username}
                    onChange={onChange}
                />
            
            </label>
            <label htmlFor='emailInput'>Email
                <input
                    id='emailInput'
                    name='email'
                    type='email'
                    placeholder='Ye olde email'
                    maxLength='30'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label htmlFor='roleInput'>Role
                <select id="roleInput" name='role' value={values.role} onChange={onChange} >
                    <option value=''>Select thine title</option>
                    <option value='Queen'>Queen Empress</option>
                    <option value='Baroness'>Duchess</option>
                    <option value='Marchioness'>Marchioness</option>
                    <option value='Countess'>Countess</option>
                    <option value='Viscountess'>Viscountess</option>
                    <option value='Baroness'>Baroness</option>
                    <option value='Freeman'>Freeman</option>
                    <option value='Vagabond'>Vagabond</option>
                    <option value='Villein'>Villein</option>
                    <option value='Cottar'>Cottar</option>
                    <option value='Slave'>Slave</option>
                </select>
            
            </label>
        </div>

    </form>
    )
}
