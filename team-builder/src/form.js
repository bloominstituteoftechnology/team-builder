import React , { useState } from "react"

export default function Form (){
 
//  const {addInfo} = this.props
  // const {values,update,submit} = this.props
  // const initialFormValues = {
          
  //   username: "",
  //   email: "",
  //   role: "",
  // }
   

  const [forms , setForms]= useState([
    {
    username: "",
    email: "",
    role : ""

  },
]) 
const [form, SetForm]= useState([{
  username:"",
  email: "",
  role: ""

},
])
  
  const changeHandler = (event) =>{
    const {name, value} =event.target
      SetForm({
      ...forms,
      // event.target.name : event.target.value
         [name ] : value
        })}   

       const  onSubmit = (event) =>{
          event.preventDefault();
          // setForms({username:"",email:"",role:""})
          
       }
  
    return(
        <form onSubmit={onSubmit}>
        <div>
      
          <label>
            Username
            
            <input
              name="username"
              type="text"
              placeholder="type a username..."
              maxLength="30"
              value={form.username}
              onChange={changeHandler}
            />
          </label>
  
          <label>
            Email

            <input
              name="email"
              type="email"
              placeholder="type an email..."
              maxLength="30"
              value={form.email}
              onChange={changeHandler}
            />
          </label>
  
        
          <label>
            Role
        
            <select  value={form.role} onChange={changeHandler}>
              <option value="">------select role------</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Front End Web Developer">Front End Web Developer</option>
              <option value="BackEnd Developer">BackEnd Developer</option>
            </select>
          </label>
  
          <div>
            <button>submit</button>
          </div>
        </div>
      </form>




    )

  }














