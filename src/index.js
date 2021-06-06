import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const teamMembers = [
  { name: "Amlak", email: "amlakbarkon@gmail.com", role:" Web Developer"},
  { name: "Barkon", email: "amlakbarkon@gmail.com", role:" Web Developer"},
  { name: "Helina", email: "amlakbarkon@gmail.com", role:" Web Developer"},
  { name: "Mitu", email: "amlakbarkon@gmail.com", role:" Web Developer"}
]
function SimpleForm(){
  return <div>Form</div>
}
ReactDOM.render(

    // <App />,
     <SimpleForm />,
  document.getElementById('root')
);

