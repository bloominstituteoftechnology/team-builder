import React, {useState} from 'react';
import './App.css';
// import MembersList from './components/membersList.js';
import Member from './components/member.js'
import MemberForm from './components/newMemberForm.js';

function App() {
  const [member, setMember] = useState([
    {
      id:1,
      name: "My name"
    },
    {
      id:1,
      name: "My name"
    },
    {
      id:1,
      name: "My name"
    }
  ]); 

  const addMember = member =>{
    const newMember ={
      id:Date.now(),
      name: member.name
    };
    setMember([...member,newMember]);
  };

  const delMember = id => {
    const newArray = member.filter(member => {
      return member.id !== id;
    });
    setMember(newArray);
  };

  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello Ana!</h1>
       <MemberForm addMemberFn={addMember} />

       <Member membersList= {member} delMemberFn={delMember} />
       {/* <MembersList/>
       <MembersList/>
       <MembersList/>
        */}
      </header>
    </div>
  );
}

export default App;
