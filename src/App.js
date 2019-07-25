import React, { useState } from "react";
import MemberList from './UserData';
import { Form, EditForm } from './Form';

function App() {
  const membersData = [
    {id: 1, name: 'Britt', email: 'britt@brittcodes.com', role: 'Queen of Everything'},
    {id: 2, name: 'Angela', email: 'alasalle@llambda.com', role: 'Savior of the Baby Devs'}
  ]
  
  const [members, setMembers] = useState(membersData);
  
  const addToList = member =>{
    member.id = members.length + 1
    setMembers([...members, member])
  }

  const removeFromList = (id) => {
    setMembers(members.filter(member => member.id !== id))
  }

  const [edit, setEdit] = useState(false)
  const initialEditState = {id: null, name: '', email: '', role: ''}
  const [currentMember, setCurrentMember] = useState(initialEditState)
  const editRow = member => {
    setEdit(true)
    setCurrentMember({ id: member.id, name: member.name, email: member.email, role: member.role})
  }

  const updateMember = (id, updatedMember) => {
    setEdit(false)
    setMembers(members.map(member => (member.id === id ? updatedMember : member)))
  }
  return (
    <div className="container">
      <h1> The Llambda Llamas</h1>
      <div className="flex-row">
        <div className="flex-large">
          {edit ? (
             <div>
             <h2>Edit Member</h2>
             <EditForm edit={edit}
                        setEdit={setEdit}
                        currentMember={currentMember}
                        updateMember={updateMember}/>
             </div>
          ):(
            <div>
            <h2>Join Us!</h2>
            <Form addToList={addToList}/>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Meet the Team</h2>
          <MemberList members={members} removeFromList={removeFromList} editRow={editRow}/> 
        </div>
      </div>
    </div>
    
  );
}

export default App;
