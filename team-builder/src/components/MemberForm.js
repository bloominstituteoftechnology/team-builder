import React from 'react'


export default function MemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name 
        const value = evt.target.value
        update(name, value)
    }
    const onSubmit = evt =>{
        
    }
return(
    <form  className="memberForm">
        <div className='inputs'>
            <label>Username
            <input 
              type="text"
              name = 'username'
              value={values.username}
              onChange={onChange}
              maxLength = '30'
              placeholder = "Enter username!"
               />
            </label>
            <label>Email
            <input 
              type="email"
              name = 'email'
              value={values.email}
              onChange={onChange}
              placeholder = "Enter email!"
               />
            </label>
            <label>Role
                <option value="">--Select a role--</option> 
            </label>


        </div>
    </form>
)

}