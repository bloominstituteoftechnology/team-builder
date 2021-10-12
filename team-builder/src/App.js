import React, {useState, useEffect} from 'react';
import './App.css';
import Member from './team components/team';
import MemberForm from './team components/teamform'


const initialFormValues ={
  name: '',
  email: '',
  role: '',
}

function App() {

  const [member, setMember] = useState([]);
  const [errorText, setErrorText] =useState('')
 
 const [formValues, setFormValues] = useState(initialFormValues);
 
 const updateForm = (inputName, inputValue) =>{
   setFormValues({...formValues, [inputName]: inputValue});
 }
 
 
 const submitForm = () => {
    const newMember ={
    name: formValues.name,
    email: formValues.email,
    role: formValues.role
   }
   if (!newMember.name || !newMember.email || !newMember.role){
     setErrorText('You have to enter all of the feilds');
     return;
   }else{
     setMember([...member, newMember ]);
     setFormValues(initialFormValues);

   }

 }
 
 
  return (
    <div className="App">
<h1>Form App</h1>
<MemberForm 
values={formValues}
update={updateForm}
submit={submitForm}
errorText={errorText}
/>
{
  member.map(member =>{
    return (
      <Member key={member.role} details={member} />
    )
  })
}
    </div>
  );
}

export default App;
