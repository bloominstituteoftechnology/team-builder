import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.js';
import Form from './components/Form.js';
import { Route, Link } from 'react-router-dom';

function App() {
  //note: this useState has an ARRAY!
  //(1:01:30) Unique ID for every individual: Date.now()
  const [people, setPeople] = useState([
    //adding IDs to the people (59:00)
    {id: 0, name: "Vanesa", email: "@v.h@gmail.com", role: "student", /*application:[] */ },
    {id: 1, name: "Vivaldi", email: "v.a@gmail.com", role: "student"},
  ]);

  //added code below around 47:00.
  //we define this function addPerson in order to not pass our "setPeople" state to our Form.js
  //now can look at our Form componenet (within return in App.js) and see that it's functions is ONLY to add a person to our people array
  const addPerson = (person) => {
    //(1:01:30) Unique ID for every individual: Date.now() & add it to the App.js file
    //since our Form.js is "dumb" and only knows when to add a person. 
    setPeople([...people, {...person, id:Date.now()}])
  };

  const editPerson = editedPerson => {
    const peopleCopy = [...people];
    // const person = people.find(person => person.id.toString() === props.match.params.id)
    const oldPerson = peopleCopy.find(person => person.id === editedPerson.id)
    console.log(editedPerson, oldPerson)
    // oldPerson.name = editedPerson.name;
    // oldPerson.email = editedPerson.email;
    // oldPerson.role = editedPerson.role;
    //using Object.assign: will take the 1st object we give it & any other objects. It will then smash the added objects into the 1st one & update them
    Object.assign(oldPerson, editedPerson)
    setPeople(peopleCopy);
  };

  return (
    //add links 54:00
    <div className="App">
      <Link to="/">Home</Link>
      {/* //where the form is going to live */}
      <Link to="/add">Add</Link>  

      {/* give the Form component setPeople as props so that we could pass the function (setPeople) into Form.js */}
      <Form submitPerson={addPerson} />
  
      <Route path="/add" 
             render={props => <Form {...props} 
                                    submitPerson={addPerson} 
                                    buttonText = "Add Person"
                                />}
          />

      <Route exact path="/" 
              render={props => people.map(person => <Card person={person} />)} 
      />
      {/* // take in each person and create a Card componnet and give that person as a prop! */}
      {/* // {people.map(person => <Card person={person} />)}  */}
      <Route path="/edit/:id"
              render={props => {
                console.log(props);
                  const person = people.find(person => person.id.toString() === props.match.params.id)
                return <Form {...props} 
                              initialPerson={person}
                              submitPerson={editPerson}
                              buttonText = "Edit Person"
                        />
                }} 
        />
    </div>
  );
};

export default App;


//NOTES:
//(56:35:00) Render function (also a prop) is a way to give our componenets take additional props 
//(1:08:00) I need to do 2 things: (1) I need to write a replacement for submitPerson  (2) Need to give some initial values to populate the form
//(1:00:00) arrays have a find method: array.prototype.find on MDN. We can call find on an array, and will run our callback function & will return the first element where that callback returns
//"true". Find is like filter, but it only gives you the FIRST match. 
//(1:19:30) adding a submitPerson function (editPerson) to our Form componenet (in App.js). Great value of making Form.js dumb!
//(1:22:00) within the function editPerson, we want to copy the people array in order to modify it. 
//But we never want to directly modify our state variables (whenever I want change state variables, we need to use the "set" function)
//That way we can make our changes on a copy & THEN add the copy to state using the "set" function!
//(1:25:00) Overview on the editPerson function. Performing mutation (i.e. editing) on a copy of my array from state (not directly). 
//(1:31:30) give the Form componenet (in App.js) a prop called buttonText and set it equal to "Add Person" or "Submit" depending on the route

//(1:33:00) Using navigation - done within the Form component (in Form.js)with the "history" prop!