import React, { useState } from 'react'
import './App.css';
import Form from "./Form"
import Member from "./Member"



const initialMemberList = {
  name: "",
  email: "",
  role: "",
}


function App() {

const [member, setMember] =useState([])
const [memberList, setMemberList] = useState(initialMemberList)

const updateForm = (inputName, inputValue) => {
  setMemberList({
    ...memberList,
    [inputName]: inputValue,
  })
}

const submitForm = () => {
  const newMember = {
    name: memberList.name.trim(),
    email: memberList.email.trim(),
    role: memberList.role,
  }
  if(!newMember.name || !newMember.email || !newMember.role)
    return;
  setMember([newMember, ...member])
  setMemberList(initialMemberList)
}

  return (
    <div className="container">
      <h1>Form Project</h1>
      <Form 
        values={memberList}
        update={updateForm}
        submit={submitForm}
      />
      <h1>Team List</h1>
      {
        member.map(mem => {
          return<Member details={mem}/>
        })
      }
      


    </div>
  );
}

export default App;
