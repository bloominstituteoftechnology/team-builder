import React from "react";

export default function TeamForm(props){
    const { values, update, submit } = props

const onCharge = evt => {
    const name = evt.target.name;
    const {value} = evt.target;
    update(name,value);
}
const onSubmit = evt => {
    evt.preventDefault()
    submit()
}
return (
<form className = 'form container' onSubmit = {onSubmit}>
<div className = 'form inputs'>
    <label>Name
    <input
name ='name'
type = 'text'
placeholder =  'What is your name?'
maxLength = '30'
value =  {values.name}
onChange = {onCharge}

/>
</label>
<div className = 'form inputs'>
    <label>Email
    <input
email ='email'
type = 'email'
placeholder =  'What is your email?'
value =  {values.email}
onChange = {onCharge}

/>
</label>

<div className = 'form inputs'>
    <label>Name
    <input
name ='name'
type = 'text'
placeholder =  'What is your name?'
maxLength = '30'
value =  {values.name}
onChange = {onCharge}

/>
</label>

<label>Role
<select value = {values.role} name ='role' onChange = {onCharge}>
<option value = ""> ---Select a Role ---</option>
<option value = 'Frontend'>Frontend</option>
<option value = 'Backend'>Backend</option>
<option value = 'Data-Science'>Data Science</option>
          </select>
</label>
<div className='submit'>
          <button>submit</button>
        </div>
</div>
</div>
</div>





</form>
)}




