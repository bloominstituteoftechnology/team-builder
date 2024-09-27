import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = event => {
        const name = event.target.name
        const value = event.target.value
        update(name, value)
    }
    const onSubmit = event => {
        event.preventDefault()
        submit()
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div>
                <label>Team Member:
                    <input 
                    type='text' 
                    onChange={onChange} 
                    name='fname'
                    placeholder='First Name'
                    value={values.fname} />
                </label>
                <label>Email:
                    <input
                    type='email'
                    onChange={onChange}
                    name='email'
                    placeholder='Email Address'
                    value={values.email}/>
                </label>
                <label>
                    <select onChange={onChange} name='role' value={values.role}>
                        <option value=''>--- Select Role ---</option>
                        <option value='Lead'>Project Lead</option>
                        <option value='FrontEndDev'>Front End Developer</option>
                        <option value='BackEndDev'>Back End Developer</option>
                        <option value='FullStackDev'>FullStack Developer</option>
                    </select>                
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}