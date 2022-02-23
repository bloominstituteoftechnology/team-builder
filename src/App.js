
import './App.css';
import React, {useState} from 'react'
import FamilyMembers from './FamilyMembers'


const initialFormValues ={
  name: "",
  age: "",
  location: "",
  relationship: ""
}

const family = [
  {  name: 'Elijah', age: 35, location: 'Idaho', relationship: 'self'},
  { name: 'Alyssa', age: 34, location: 'Idaho', relationship: 'wife'}
]

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [familyMembers, setFamilyMembers] = useState(family);

  const change = (evt) => {
    // console.log(evt)
      setFormValues({ ...formValues, [evt.target.name]: evt.target.value})
    }
  

  const submit = (evt) => {
    evt.preventDefault();
    const newFamilyMember = {
      name: formValues.name,
      age: formValues.age,
      location: formValues.location,
      relationship: formValues.relationship
    }
    if (!newFamilyMember.name||!newFamilyMember.age||!newFamilyMember.location||!newFamilyMember.relationship) {
      return
    }
    setFamilyMembers(familyMembers.concat(newFamilyMember))
    setFormValues(initialFormValues)
   
  }


  // if (!familyMembers.name||!familyMembers.age||!familyMembers.location||!familyMembers.relationship) {
  //   return
  // }

  return (
    <div className="container">
      <h1>Family Members</h1>
      {familyMembers.map((familyMember, index) => {
        return <p key= {index}> {familyMember.name} is {familyMember.age}, lives in {familyMember.location}, and is {familyMember.relationship} to Elijah.</p>
      })}
      <form onSubmit={submit}>
       
        <input
        name= "name"
        type= "text"
        value= {formValues.name}
        onChange={change}
        placeholder= "name"
        />
          <input 
        name= "age"
        type= "text"
        value= {formValues.age}
        onChange={change}
        placeholder= "age"      
        />
        <input 
        name= "location"
        type= "text"
        value= {formValues.location}
        onChange={change}
        placeholder="location"
        />
          <select value = {formValues.relationship} name= "relationship" onChange={change} >
            <option value= "">--Select--</option>
            <option value= "self"> Self </option>
            <option value= "wife"> Wife </option>
            <option value= "son" > Son </option>
            <option value= "daughter"> Daughter </option>
          </select>
        <input  type= "submit" value= "Add a Family Member"/>
      </form>
      {/* <FamilyMembers */}
      {/* values={formValues}/> */}
    </div>
  );
}

// console.log(formValues)
export default App;
