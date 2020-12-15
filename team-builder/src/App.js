import './App.css';
import React, {useState} from "react";
import Form from "./Form";

function App() {

  const defaultValues = {
  name: "Chaz",
  email: "Chaz@chazmail.com",
};
  
  const [formValues, setFormValues] = useState(defaultValues);

  const [savedFormInfo, setSavedFormInfo] = useState([]);



  return (
    <div className="App">
      <header className="App-header">
      <Form />
      </header>
    </div>
  );
}

export default App;
