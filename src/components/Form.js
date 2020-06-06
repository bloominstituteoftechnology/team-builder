import React, {useState} from 'react'



const Form = props =>{

    const [member, setMember] = useState({
        name:'',
        email:'',
        role:''
    })

    const changeHandler = (event) => {
        setMember({
             ...member,
              [event.target.name]:event.target.value
        })
        }
        
    return(
        
<form onSubmit={(event) => {
    event.preventDefault();
    props.addMember(member)
    setMember({name:'',email:'',role:''})
}
}>
    <label>Add team member</label><br/>
    <input type="text" placeholder='name' name='name' value={member.name} onChange={changeHandler}/><br/>
    <input type="text" placeholder='email' name='email' value={member.email} onChange={changeHandler}/><br/>
    <input type="text" placeholder='role'name='role' value={member.role} onChange={changeHandler}/><br/>
    <button>submit</button>    
</form>
)}

export default Form