import React, {useState} from 'react';
import TeamForm from './Form';
import List from './List';



function App () {


  const [inputMembers, setInputMembers] = useState([{


    id: 1,
    member: "Naruto",
    role: "Leader",
    email: "n/a",
    id: 2,
    member: "Sasuske",
    role: "FrontMan",
    email: "n/a",
    id:3,
    member: "Sakura",
    role: "Healer",
    email: "n/a"



  }]);


  return (<div>

    <TeamForm inputMembers={inputMembers} setInputMembers={setInputMembers} />

    <ul>

<List inputMembers={inputMembers} />

    </ul>
    
  </div>
 
  );
 }
 

export default App;
