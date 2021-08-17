import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const nameList = [
 { Name: 'Leo',
   Email: 'starryhornet863@gmail.com',
   Role: 'Student'
  },
  { Name: 'Boris',
   Email: 'vadimBlyat@gopnicmail.russ',
   Role: 'Russian Gopnic SuperStar'
}
]



function ModuleForm() {
  const [formValues, setFormValues] = useState(
    {Name:'', Email: ''})
  const [name, setName] = useState(nameList);
  const change = (event) => {
    const { name, value } = event.target;
   console.log(name, value)
  setFormValues({ ...formValues, [name]: value })
  }

  const submit = (event) => {
    event.preventDefault();
    const newMember = {
      Name: formValues.Name,
      Email: formValues.Email
    }
    setName(name.concat(newMember));
    setFormValues({Name:'', Email: ''});
  }

  return (
    <div className='container'>
      <h1>Team Builder Form</h1>
       {name.map((N, idx) => {
        return(
         <div key={idx}>
           <h4>{N.Name }</h4>
           <p>{N.Email }</p>
         </div>
         )
       })}
       <form onSubmit={submit}>
        <label>Name
         <input
         type="text"
         name="Name"
         value={formValues.Name}
         onChange={change}
         />
      </label>
      <label>Email
        <input
         type="email"
         name="Email"
         value={formValues.Email}
         onChange={change}
         />
         </label>
             <label>Role
                <select value={formValues.Role} name="role" onChange={change}>
                 <option value=''>-- Select a Role --</option>
                 <option value='Student'>Student</option>
                 <option value='TL'>Team Lead</option>
                 <option value='Instructor'>Instructor</option>
                 <option value='Alumni'>Alumni</option>
                 <option value='Russian Gopnic SuperStar'>Russian Gopnic SuperStar</option>
                </select>
            </label>
         <input type="submit" value="Sing Up Here!" />
       </form>
    </div>
  )
}


ReactDOM.render(
  <>
    <ModuleForm />
    <App />
  </>
  , document.getElementById('root')
)


