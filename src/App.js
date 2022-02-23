
import './App.css';
import React, {useState} from 'react'
import FamilyForm from './FamilyForm'
import FamilyMember from './FamilyMembers'


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

  const change = (inputName, inputValue) => {
    // console.log(evt)
      setFormValues({ ...formValues, [inputName]: inputValue})
    }
  

  const submit = () => {
    const newFamilyMember = {
      name: formValues.name.trim(),
      age: formValues.age.trim(),
      location: formValues.location.trim(),
      relationship: formValues.relationship.trim()
    }
    if (!newFamilyMember.name||!newFamilyMember.age||!newFamilyMember.location||!newFamilyMember.relationship) {
      return
    }
    setFamilyMembers(familyMembers.concat(newFamilyMember))
    setFormValues(initialFormValues)
   
    const cleanup= () => {
      family.push(newFamilyMember)
      setFamilyMembers(family);
      setFormValues(initialFormValues);
    }
  }

console.log(formValues)


  return (
    <div className="container">
      <h1>Family Members</h1>
      {familyMembers.map((familyMember, index) => {
        return <p key= {index}> {familyMember.name} is {familyMember.age}, lives in {familyMember.location}, and is {familyMember.relationship} to Elijah.</p>
      })}
      <FamilyForm 
      value={formValues}
      update= {change}
      submit= {submit}
      />
      {
        familyMembers.map((familyMember, index) => {
          return (
            <FamilyMember key={index} details={familyMember}/>
          )
        })
      }
      

    </div>
  );
}

// console.log(formValues)
export default App;
