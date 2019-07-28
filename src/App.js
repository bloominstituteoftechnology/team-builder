import React, { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form.js';
import { Route, Link } from 'react-router-dom';

function App() {
  const [people, setPeople] = useState([
    {id: 0, name: "Jimmy John", email: "jimmyjohn34@haha", role: "TL"},
    {id: 1, name: "scott beeker", email: "itsme@scottbeeker", role: "student"},
    {id: 2, name: "james bond", email: "itsme@bond", role: "student"},
    {id: 3, name: "harlod jones", email: "itsme@mikejones", role: "student"},
  ]);

  const addPerson = person => {
    setPeople([...people, {...person, id: Date.now()}]);
  };

  const editPerson = editedPerson => {
    const peopleCopy = [...people];
    // const oldPerson = peopleCopy.find(person => person.id === editedPerson.id);
    // console.log(editedPerson, oldPerson);
    // oldPerson.name = editedPerson.name;
    // oldPerson.email = editedPerson.email;
    // oldPerson.role = editedPerson.role;
    // Object.assign(oldPerson, editedPerson);
    const personIndex = peopleCopy.findIndex(person => person.id === editedPerson.id);
    peopleCopy[0] = editedPerson;
    setPeople(peopleCopy);
  };

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add Person</Link>
      <Route path="/add"
             render={props => <Form {...props}
                                    submitPerson={addPerson}
                                    buttonText="Add Person"
                              />}/>
      <Route exact path="/"
             render={props => people.map(person => <Card person={person} />)}/>
      <Route path="/edit/:id"
             render={props => {
               const person = people.find(person => person.id.toString() === props.match.params.id);
               return <Form {...props}
                            initialPerson={person}
                            submitPerson={editPerson}
                            buttonText="Edit Person"
                      />;
             }}/>
    </div>
  );
}

export default App;






















// function App() {
//   const [teamArray, setTeamArray] = useState([])
//   const [memberToEdit, setMemberToEdit] = useState({})

//   const editMember = (member) => {
//     console.log("member going to edit", member)
//     setMemberToEdit(member)
//     console.log("app memberToEdit", memberToEdit)
//   }

//   console.log("app teamArray", teamArray)
//   if (teamArray.length === 0) {
//     return (
//       <div className="App">
//         <Form
//           setTeamArray={setTeamArray}
//           teamArray={teamArray}
//           memberToEdit={memberToEdit}
//         />
//         <div>
//         Add a new team member
//       </div>
//     </div>
//     )
//     } else {
//     return (
//       <div className="App">
//       <Form  
//         setTeamArray={setTeamArray}
//         teamArray={teamArray}
//       />
//       <div>
//       {teamArray.map(member => {
//         console.log("member", member)
//           return (
//             <div key={member.email}>
//               <teamMembers
//                 member={member}
//               />
//               <button
//                 onClick={() => editMember(member)}
//               >
//                 edit
//               </button>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//     )
//   }
// }

// export default App;