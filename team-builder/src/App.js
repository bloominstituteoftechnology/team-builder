import React, {useState} from "react";
import './App.css';
import MemberForm from './components/MemberForm'


const initialFormValues={
  username: "",
  email: "",
  role: "",
}

export function App() {
  // const[members, setMembers] = useState([]);
  // const {formValues, setForms} = useState(initialFormValues);

  return (
    <div className="container"> 
    <MemberForm/>
    
    </div>
  )
 };

export default App;
