import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import Member from './components/Member';

function App() {
  const [list, setList] = useState([]);
  const [userEdit, setUserEdit] = useState({ name: '', email: '', role: '' });

  const addNewUser = (user) => {
    const newUser = {
      id: list.length + 1,
      name: user.name,
      email: user.email,
      role: user.role,
    };
    setList([...list, newUser]);
  };

  const editMember = (id) => {
    let user = list.filter((item) => id === item.id);
    setUserEdit({
      // name: user[id].name,
      // email: user[id].email,
      // role: user[id].role,
      name: user[0].name,
      email: user[0].email,
      role: user[0].role,
    });
    // console.log(user[0].name);
  };

  const deleteMember = (id) => {
    setList(list.filter((item) => (item.id ? !id : null)));
  };

  return (
    <div className='App'>
      <Form addNewUser={addNewUser} userEdit={userEdit} />
      {list.map((member, index) => (
        <Member
          name={member.name}
          role={member.role}
          email={member.email}
          id={member.id}
          key={index}
          deleteMember={deleteMember}
          editMember={editMember}
        />
      ))}
    </div>
  );
}

export default App;
