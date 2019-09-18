import React, {useState} from 'react'



function Form(props){

     const [member, setMember] = useState({
          name: "",
          email: "",
          role: ""
     })

     const handleChanges = event => {
          setMember({
               ...member, [event.target.name]:event.target.value
          })
     }

     const submitForm = event => {
          event.preventDefault();
          props.addNewMember(member);

          setMember({
               name:"",
               email:"",
               role:""
          })
     }



     return(
          <form onSubmit={submitForm}>
               <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                    id="name"
                    name="name"
                    type="text"
                    value={member.name}
                    onChange={handleChanges}/>
               </div>

               <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                    id="email"
                    name="email"
                    value={member.email}
                    type="email"
                    onChange={handleChanges}/>
               </div>

               <div>
                    <label htmlFor="role">Role:</label>
                    <select id="role" name="role" value={member.role} onChange={handleChanges}>
                         <option value="0" onChange={handleChanges}></option>
                         <option value="Frontend Web Dev">Frontend Web Dev</option>
                         <option value="Backend Web Dev">Backend Web Dev</option>
                         <option value="Data Science">Data Science</option>
                         <option value="UX Design">UX Design</option>
                         <option value="iOS/Android Development">iOS/Android Development</option>
                         <option value="Coffee Runner">Coffee Runner</option>
                    </select>
               </div>

               <button type="submit">Add Team Member</button>
          </form>    
     )
}

export default Form;

