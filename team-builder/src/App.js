import React from 'react';
import { v4 as uuid } from 'uuid'; // univerally unique identifier installed and used as the team member id generator below 
import './App.css';

  // step 1: we don't have a real api to get data from, so we'll establish the shape of our build-a-team list. In this case set up an array to hold a series of team members. 

  const initialTeamList = [{
    id: uuid(), // invoked UUID component imported above
    username: 'Zoey_BananaFana',
    email: 'zoeyplays_theukelele@zoey.com', 
    coderType: 'Quirky', 
    role: 'Style Guru',
  }]; 

  console.log(initialTeamList)

  // step 2: visualize how the form will appear, and put it into state! This will drive the form. There will be only one form, so we only need to instantiate one object and its key:value pairs. This is usually done with the help of the back-end members.

  const initialFormValues = {
    // Text Inputs below // 
    username: '', 
    email: '', 
    // Dropdown selection options below // 
    coderType: '', 
    role: '',
  };

  // step 3: set up helpers to simulate asychronous data get and post (this normally would be a real api)

  const fakeAxiosGet = () => {
    return Promise.resolve({ status:200, success: true, data: initialTeamList});
  };
  const fakeAxiosPost = (url, { username, email, coderType, role }) => {
    // declare newTeamMember variable to store input data 
    const newTeamMember = { id: uuid(), username, email, coderType, role };
    return Promise.resolve({ status: 200, success: true, data: newTeamMember}); 
  };


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Build-A-Team</h1>
      </header>
      <p>Build your perfect team, where the flair is the style guru, that chinsy fabric heart is the back-end guy, and those front-enders are all the stuffing.</p>
    </div>
  );
}

export default App;
