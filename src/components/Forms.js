import React, { useState } from 'react';
import ReactDOM from 'react-dom';





const memberList = [
{memberName:'Javy', memberType: 'Leader', memberEmail: 'javy@gmail.com', memberPosition:'Leader'},
{memberName: 'Laysha', memberType: 'Square',  memberEmail: 'Laysha@gmail.com', memberPosition:'Squarer'},
{memberName:'Dinetzy', memberType: 'Circle',  memberEmail: 'Dinetzy@gmail.com', memberPosition:'Circle'},
{memberName:'Adriana', memberType: 'Triangle',  memberEmail: 'Adriana@gmail.com', memberPosition:'Triangle'}
]

const initialFormValues = { memberName: '', memberType: '' }


export default function Forms() {




  const [formValues, setFormValues] = useState(initialFormValues);
  const [members, setMembers] = useState(memberList) ;

const change = (evt) => {
    const { name, value } = evt.target;

 

    setFormValues({...formValues, [name]: value});
}

const submit = (evt) => {
    evt.preventDefault();

    const newMember = {
    memberName: formValues.memberName.trim(),
    memberType: formValues.memberType.trim(),
    memberEmail: formValues.memberEmail,
    memberPosition: formValues.memberPosition
    }
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
}




return (

<div className="container">
  <h1>Members</h1>
  {members.map((member, idx) => (
    <div key={idx}>
      {member.memberName} is a {member.memberType}. Email: {member.memberEmail}, Position: {member.memberPosition}  
      </div>
  ))}
  <form onSubmit={submit}>
      <label>Name:
    <input
    type="text"
    name="memberName"
    placeholder="Name"
    onChange={change} />
    </label>
    <label>Shape:
    <input type="text"  
    name="memberType" 
    placeholder="Shape"
    onChange={change}/>
    </label>
    <label>Email:
        <input
        type="text"
        name="memberEmail"
        placeholder="Email"
        onChange={change}/>
        </label>
        <label>Position:
        <select onChange={change}>
            <option value="">--Please select a role--</option>
            <option value="Leader">Leader</option>
            <option value="Square">Square</option>
            <option value="Circle">Circle</option>
            <option value="Triangle">Triangle</option>
            
        </select>
        </label>
    <button type="text"
    name="submit">Submit</button>
  </form>
</div>






)
}
