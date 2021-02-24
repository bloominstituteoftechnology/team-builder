import React, {useState} from 'react';
import Members from "./components/Members.js"
import Form from "./components/Form.js"

function App() {
const [members, setMembers] = useState([
  {
    id: 1,
    name: "EA Burdett",
    email:"erikaburdet@gmail.com",
    Alias:"Telephone Heater"
  },
  {
    id: 2,
    name: "Bella Barnett",
    email:"isabellakbarnett@gmail.com",
    Alias: "Isabella"
  }
]);
const add = adder => {
const newMember = {
  id: 
  name: 
  email: 
  
};
setMembers([...]);
};
};
return (
<div className = "App">
   <h1>Team List</h1>
<Form />
<Members />
</div>
);

export default App;
