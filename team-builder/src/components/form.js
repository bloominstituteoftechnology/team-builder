import React from 'react'


export default function form(props){
    const {update, values, submit} = props

    const onChange = evt => {
        const { name, value } = evt.target
        update( name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name:&nbsp;
                     <input
                     type='text'
                     placeholder='Enter name'
                     id='name'
                     name='name'
                     maxLength='20'
                     onChange={onChange}
                     value={values.name}
                     ></input>   
                </label>
               
                <label htmlFor='email'>Email:&nbsp;
                    <input
                    type='email'
                    placeholder='Enter email'
                    id='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    ></input>
                </label>

                <label htmlFor='role'>Role:&nbsp;
                    <select
                    id='role'
                    name='role'
                    onChange={onChange} 
                    value={values.role}
                    >
                     <option value=''>Select a role</option> 
                     <option value='backend'>Backend</option> 
                     <option value='frontend'>Frontend</option> 
                     <option value='ios'>IOS</option>   
                    </select>
                </label>
                <button>Submit</button>
            </form>

        </div>
    )
}