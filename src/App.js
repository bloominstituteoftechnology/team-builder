
import React, { useState,useEffect } from 'react';
import Form from './Form'
import './App.css';
// import { getDefaultNormalizer } from '@testing-library/dom';


const JobsMembersOfTeam = [
  { name: "julian parish", role: "Manager", email: "julianp@getDefaultNormalizer.com"},
  { name: "donna mcmillan", role: "worker", email: "donnaM@getDefaultNormalizer.com" },
  { name: "brandon folster", role: "supervisor", email: "brandonF@getDefaultNormalizer.com" },
  { name: "alan hole", role: "SoftWare_Engineer" , email: "AlanH@getDefaultNormalizer.com"},
  { name: "john gotti", role: "Electrical Engineer", email: "johnG@getDefaultNormalizer.com" },
  { name: "carl holsom", role: "Manager", email: "carlH@getDefaultNormalizer.com"},
  { name: "kevin klien", role: "worker", email: "kevinK@getDefaultNormalizer.com" },
  { name: "sarah henry", role: "supervisor", email: "sarahH@getDefaultNormalizer.com" },
  { name: "edith newsome", role: "SoftWare_Engineer" , email: "edithN@getDefaultNormalizer.com"},
  { name: "carl wethers", role: "Electrical Engineer", email: "carlW@getDefaultNormalizer.com" }







];

const initialFormValues = {
  name: "",
  role:"",
  email: "" ,
};


function App() {
 

  const [worker, setWorker] = useState(JobsMembersOfTeam);
  const [formValue, setFormValue] = useState(initialFormValues);
  const [error, setError] = useState("");

  


  const updateForm = (inputName, inputValue) => {
    setFormValue({ ...formValue, [inputName]: inputValue });
  };

 const submit = () => {

   const newUser = {
    name:formValue.name.trim(),
    email:formValue.email.trim(),
    role:formValue.role,
    

   };
   if(!newUser.name || !newUser.email||!newUser.role){
     setError ("you have to fill out all fields");
   }
   else{
     setWorker([...worker,newUser]);
     setFormValue(initialFormValues);
     setError(null);
   }

 };


  return (
    <div className="container">
      <h1>JOB POSITION FINDER</h1>
      <Form 
      formValue={formValue} 
      updateForm={updateForm}
       submit={submit}
        />
      {worker.map((workers) => {
        return (
          <div>
            {workers.name} is the {workers.role} with email address of {workers.email}
          </div>
        );
      })}
    </div>
  );
}
    

export default App;
