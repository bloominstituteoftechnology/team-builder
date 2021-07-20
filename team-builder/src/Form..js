import React from 'react'
export default function Form(props) {
    const { values, update, submit } = props
    
    const onChange = evt => {
        const { name, value } = evt.target
        update (name, value)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className= 'form-container' onSubmit={onSubmit}>
            <div className = 'form inputs'>
                <label htmlFor='username'>
                    <input
                    id='username'
                    type='text'
                    name='username'
                    onChange={onChange}
                    value={values.username}
                    />
                </label>
                <label htmlFor='email'>
                    <input
                    id='email'
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
                <label htmlFor='role'>
                    <select id='role' name='role' onChange={onChange} value={values.role}>
                        <option value=''>---Role---</option>
                        <option value='backend engineer'>backend engineer</option>
                        <option value='frontend engineer'>frontend engineer</option>
                        <option value='designer'>designer</option>
                    </select>
                </label>            
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>

        </form> 
    )
}