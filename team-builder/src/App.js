
import React, { useState } from 'react';
import './App.css';
import CharacterForm from './Form';
import Character from './Character'

//this will be the form 'template'
const defaultValues = {
  name:"",
  position:"",
  type:""
}

//App manages state, Form manages...The form.
//  DO I NEED ANOTHER STATE TO MANAGE CARDS ON SCREEN???????

function App() {
  //values of the form
  const [formValues,setFormValues]= useState(defaultValues);
  //storing the values of the form
  const [savedFormInfo, setSavedFormInfo]= useState([]);
  
  //creating a function that changes state
  const change = (evt) =>{
    //turn evt.target (place we are interacting with on the form into something more manageable)
    const { name, value }= evt.target;
    //^ destructuring the data. The name of the data and its value
    setFormValues({...formValues, [name]:value});
    //^setting state (...) spreads current formValues state so we don't overwrite the data
    // then surgically replacing the data with [name]:value
  }  
  let newCharacter={};
  function addNewCharacter(data){
    const newCharacter={
      name:data.name,
      position:data.position,
      type:data.type,
    };
    
    return newCharacter;
    
  }
  const submit =(evt)=>{
    
    evt.preventDefault();
    //^^prevents the default function of submit from reloading the page
    const newData= {
      name: formValues.name.trim(),
      position: formValues.position.trim(),
      type: formValues.type.trim()
    };
    setSavedFormInfo([...savedFormInfo,newData]);
    setFormValues(defaultValues);
    addNewCharacter(newData)
  };

  return (
    <div className="App">
      <div>
        <CharacterForm 
        formValues={ formValues } 
        change = { change } 
        submit = {submit}
        >
        </CharacterForm>
        <div>
        <Character submit={submit}>
      
        </Character> 
         </div>
        </div>
    </div>
  );
}
        

export default App;
