import Form from './Components/Form';
import React,{useState} from 'react';

function App() {
  const [team,setTeam] = useState([])
  const [values,setValues] = useState({
    name:'',
    email:'',
    hobbies:'',
    location:'',
    age:'',
  })

const submit =()=>{
  setTeam(...team,[values,]);
  setValues({
    name:'',
    email:'',
    hobbies:'',
    location:'',
    age:'',
  })
}
const change=(name,value)=>{
  setValues({...values,[name]:value})
}

  return (
    <div className="App">
     <Form values={{values}} change ={change} submit={submit} ></Form>

     {team.map((mate,index)=>{
       return(
         <div key={index}> 
           {mate.name},{mate.age},{mate.hobbies}
         </div>
       )
     })}
      
    </div>
  );
}

export default App;
