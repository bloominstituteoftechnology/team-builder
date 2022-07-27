import React, { useState, useEffect } from 'react'
import './CSS/App.css';
import './CSS/reset.css';
import Form from './Form'
import Member from './formValues'
import * as yup from 'yup'

//1. Our user clicks the `Edit` button/icon to start editing a team member
//2. A function in App is invoked that sets the clicked member to 
//`memberToEdit` on state
//3. `Form.js` is receiving `memberToEdit` as a prop, and if that 
//prop changes, the effect we built will set that object to state and 
//populate the form with that member's info
//4. The user updates the member info
//5. Uh... now what do we do with this new data? If we submit the form, 
//it will just add a new member 😫. Never fear! We will fix this in the 
//next section!


const teamMemberList = [
  {
    name: 'jordon',
    email: 'jordonaren@gmail.com',
    role: 'FrontEnd Dev'
  },
];
function App() {
  const [teamMembers, setTeamMembers] = useState(teamMemberList);
  const [formValues, setFormValues] = useState({name: '', email: '', role: ''});
  const [errors, setErrors] = useState({name: '', email: '', role: ''});
  const [disabled, setDisabled] = useState(true)

  const onSubmit = (evt) => {
    evt.preventDefault()

    const newTeamMember = {
        name: formValues.name,
        email: formValues.email,
        role: formValues.role
    }
        setTeamMembers(teamMembers.concat(newTeamMember));
        setFormValues({name: '', email: '', role: ''});
  };

  const schema = yup.object().shape({
    name: yup.string().required('First Name is required') .min(2, 'Im sorry if your name is JO, today its JOE'),
    email: yup.string().email('Must be a valid email').required('Must include email'),
    role: yup.string().oneOf(['Front End Dev', 'Back End Dev']).required('please choose a role')
})

useEffect(()=>{
    schema.isValid(formValues).then(valid =>{
        setDisabled(!valid)
    })
}, [formValues])

const inputChange= e => {
  const { name, value } = e.target

  yup
  .reach(schema, name)
  .validate(value)
  .then(valid => {
    setErrors({
      ...errors, [name]: ''
    })
    })
    .catch(err => {
      setErrors({
        ...errors, [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues, [name]: value
    })
  }




  // const editMember = (evt) =>{
  //   const {name, value}= evt.target

  //   setMemberToEdit({...formValues, [name]: value});
  // }

  
  
  return (
    <div className="AppContainer">
      <div className='App'>
      <Member teamMembers={teamMembers} />
         <Form onSubmit={onSubmit} errors={errors} inputChange={inputChange} formValues={formValues}  setFormValues={setFormValues} disabled={disabled}/> 
      </div>
    </div>
  );
};

export default App;
