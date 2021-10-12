import React from 'react'


export default function MemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name 
        const value = evt.target.value
        update(name, value)
    }
    const onSubmit = evt =>{
     evt.preventDefault() 
     submit()  
    }
return(
    <form  className="memberForm" onSubmit={onSubmit}>
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
              name = "email"
              value={values.email}
              onChange={onChange}
              placeholder = "Enter email!"
               />
            </label>
            {/* <label>First Name
            <input 
              type="text"
              name = ""
              value={values.email}
              onChange={onChange}
              placeholder = "Enter email!"
               />
            </label>
            <label>Last Name
            <input 
              type="text"
              name = ""
              value={values.email}
              onChange={onChange}
              placeholder = "Enter email!"
               />
            </label> */}
            <label>Role
            <select 
            value ={values.role} 
            name="role" 
            onChange={onChange}>
                <option value="">--Select a role--</option> 
                <option value="backend engineer">Backend engineer</option>
                <option value="frontend engineer">Frontend engineer</option>
                <option value="designer">Designer</option>
            </select>
            </label>

            <div className='submit'>
          <button>Submit</button>
        </div>

        </div>
    </form>
)

}