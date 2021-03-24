import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// function tmForm() {

//   const newTeamMember = { name:"", email:"", role:"" }

//   const [tmValues, setTMvalues] = useState(initialFormValues);

  // const change = (event) => {
  //   const { name, value } = event.target;
  //   setTMvalues({ ...tmValues, [name]: value });


  // const submit = (event) => {
  //   evt.preventDefault();
  //   const newPet = {
  //     name: formValues.petName.trim(),
  //     email: formValues.petType.trim(),
  //     role: formValues.petType.trim(),
  //   };
  //   setPets(pets.concat(newPet));
  //   setFormValues(initialFormValues);
  // };
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();