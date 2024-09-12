import React from 'react'


export default function form(props){
    const {update, member, submit} = props

    const onChange = evt => {
        const { name, value } = evt.target
        update( name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        if(props.memberToEdit){
            props.editMember(member)
        } else {
            submit()

        }
    }


    return(
        <div className='form-container'>
            <h2>Enter or edit a team member</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name:&nbsp;
                     <input
                     type='text'
                     placeholder='Enter name'
                     id='name'
                     name='name'
                     maxLength='20'
                     onChange={onChange}
                     value={member.name}
                     ></input>   
                </label>

                <label htmlFor='email'> Email:&nbsp;
                    <input
                    type='email'
                    placeholder='Enter email'
                    id='email'
                    name='email'
                    onChange={onChange}
                    value={member.email}
                    ></input>
                </label>

                <label htmlFor='role'> Role:&nbsp;
                    <select
                    id='role'
                    name='role'
                    onChange={onChange} 
                    value={member.role}
                    >
                     <option value=''>Select a role</option> 
                     <option value='backend'>Backend</option> 
                     <option value='frontend'>Frontend</option> 
                     <option value='ios'>IOS</option>   
                    </select>
                </label>
                <button
                disabled={ !member.name || !member.email || !member.role}
                >Submit</button>
            </form>

        </div>
    )
}