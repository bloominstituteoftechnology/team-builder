import './App.css';
import { useState } from 'react'
import { MemberForm, Member, memberList } from './Form'


const initialFormValues = {
  username: "",
  email: "",
  role: "",
}; 

function App() {
  const [members, setMembers] = useState(memberList)
  const[formValues, setFormValues] = useState(initialFormValues)


  const updateForm = (inputName, inputValue) =>{
    setFormValues({
      ...formValues,
      [inputName]:inputValue,
    })
  }

  const submitForm =()=> {
    const newMember={
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
    }
    if(!newMember.username || !newMember.email || !newMember.role) return;

    setMembers([...members, newMember])
    setFormValues(initialFormValues)

  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
    {members.map((member)=> {
      return <Member key={member.id} details={member} />
    })}

    </div>
  );
}

export default App;
