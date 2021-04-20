import React, { useState } from 'react'

const initialFormValues = {
    fName: '',
    lName: '',
    email:'',
    role:'',
}
const team = [
    {fName: 'Ricky', lName: 'Pena', email:'ricky@ricky.com',role:'Backend Engineer'},
    {fName: 'Mike', lName: 'Simmons', email:'mike@mike.com',role:'Frontend Engineer'},

]



export default function Form (props){
    const {values,update,submit} = props
    // const [members,setMembers] = useState(team);
    // const[formValues,setFormValues] = useState(initialFormValues);
console.log("HERE",values)
    const onChange = evt =>{
        const {name, value} = evt.target;
        update(name,value);
    }
    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }



    return(
        <div className="container">
            <form onSubmit = {onSubmit}>
                <label htmlFor ="fName">First Name:
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.fName}
                        name = "fName"
                    />
                </label>
                
                <label htmlFor ="lName">Last Name: 
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.lName}
                        name = "lName"
                    />
                </label>
                 
                <label htmlFor ="email">Email: 
                    <input
                        type="text"
                        onChange ={onChange}
                        value ={values.email}
                        name = "email"
                    />
                </label>
                
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>
                

                
                <div className ="submit">
                <button>Submit</button>
                </div>
            </form>
        </div>
       
    )
}