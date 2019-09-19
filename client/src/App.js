import React, {useState} from 'react';
import './App.css';

import Form from "./components/Form";
import FormCard from "./components/FormCard";

function App() {
  const [members, setMembers] = useState([]);

  const submitMember = member => setMembers([...members, member]);

  const update = updatedMember =>
    setMembers([
      ...members.map(member => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      })
    ]);
    console.log(`members`, members);

  return (
    <div className="App">
        <Form add={submitMember} />
        {members.map((member, i) => (
          <FormCard member={member} key={i} update={update} />
        ))}
    </div>
  );
}

export default App;

//Version 1 - original code that works 
// import React, {useState} from 'react';
// import './App.css';

// import Form from "./components/Form";
// import FormCard from "./components/FormCard";

// function App() {
//   const [members, setMembers] = useState([
//     {
//       id: 1,
//       name: "Example Name",
//       email: "Example Email",
//       role: "Example Role"
//     }
//   ]);
//   console.log(`This is members state from App.js`, members);
  
//   const addNewMember = (member) => {
//     const newMember = {
//       id: Date.now(),
//       name: member.name,
//       email: member.email,
//       role: member.role
//     }
//     setMembers([...members, newMember]);
//   };

//   return (
//     <div className="App">
//         <Form addNewMember={addNewMember} />
//         <FormCard members={members} />
//     </div>
//   );
// }

// export default App;
