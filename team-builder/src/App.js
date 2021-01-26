import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import UserForm from "./UserForm"
import User from "./User"

const initialFormValues = {
  name: "",
  age: "",
  email: "",
  cellNumber: "",
  unit: "",
};

function App() {
  const [user, setUser] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
      setFormValues({
        ...formValues,
        [inputName]: inputValue,
      })
  }

  const submitForm = () => {
      const newUser = {
        name: formValues.name.trim(),
        age: formValues.age.trim(),
        email: formValues.email.trim(),
        cellNumber: formValues.cellNumber.trim(),
        unit: formValues.unit.trim()
      };

      if(!newUser.name || !newUser.age || !newUser.email || !newUser.cellNumber || !newUser.unit) return;
      
      setUser(user.concat(newUser));
      setFormValues(initialFormValues);
      // axios
      //   .post("fakeapi.com", newUser)
      //   .then((res) => {
      //     setUser([newUser, ...user]);
      //     setFormValues(initialFormValues);
      //   })
      //   .catch((err) => {
      //     debugger;
      //   });

        
  };

  // useEffect(() => {
  //   axios.get("fakeapi.com")
  //   .then((res) => setUser(res.data)
  //   );
  // },[]);
  
  return (
    <div className="App">
      <p>Rendering</p>
      <UserForm 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
    <div>
      {user.map((friend) => {
        return <User key = {friend.id} details = {friend}/>
      })}
    </div>
    </div>
  );
}

export default App;