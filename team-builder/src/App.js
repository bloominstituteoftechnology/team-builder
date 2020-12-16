import './index.css';
import React, { useState } from "react"
import Form from "./form"


function App() {

  
  export default function App() {
   
    const initialFormValues = {
          
      username: "",
      email: "",
      role: "",
    }
      const [form, SetForm]= useState(initialFormValues)
  
      const submitForm = () => {
      
        const newPerson= {
          username: formValues.username.trim(),
          email: formValues.email.trim(),
          role: formValues.role,
        };
      }
        const updateForm = (inputName, inputValue) => {
        setForm({
          ...formValues,
          [inputName]: inputValue,
        });
      };
    
    return (
      <div className="App">
        <Form
          values={form}
           update={updateForm}
           submit={submitForm}
        />
      </div>
    );
  }
  





  
}

export default App;
