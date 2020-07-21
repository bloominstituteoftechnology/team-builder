import React, { useState, useEffect } from 'react'; 
import { v4 as uuid } from 'uuid'; // univerally unique identifier installed and used as the team member id generator below 
import './App.css';
import MemberForm from './MemberForm';

  // step 1: we don't have a real api to get data from, so we'll establish the shape of our build-a-team list. In this case set up an array to hold a series of team members. 

  const initialTeamList = [{
    id: uuid(), // invoked UUID component imported above
    username: 'Zoey_BananaFana',
    email: 'zoeyplays_theukelele@zoey.com', 
    coderType: 'Quirky', 
    role: 'Style Guru',
  }]; 

  // // DELETE COMMENTS HERE FOR TESTING
  // console.log(initialTeamList);

  // step 2: visualize how the form will appear, and put it into state! This will drive the form. There will be only one form, so we only need to instantiate one object and its key:value pairs. This is usually done with the help of the back-end members. Remember to pull in useState and useEffect from the React package now, since we know we will be needing them. We will be setting up the form's state in this level of the hierarchy - it can be done lower, in the form component itself. That's up to you to decide. 

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
  // step 4: take a look at the components folder: the very base of the components we think we'll need have been built. We know we want a form: MemberForm, and an individual team member card to reflect our choices: TeamMember. Now we will instantiate the team state: 
  const [team, setTeam] = useState([]); 
  // step 5: setup the needed form state, to hold the values of the form. The state on render will reflect the skeleton we built above, in initialFormValues
  const [formValues, setFormValues] = useState(initialFormValues); 

  // step 6: create a helper function that will update the form! We need a function to allow for the form to be utilised by the user, and appropriately updated. The user will be able to manipulate the value, so the function will need to be able to take the input's name, and the given value. Remember that we want to preserve what is already in the data pool, not overwrite it. That in mind we will use the Spread Operator to copy the original form state (formValues above), and add the new data. 
  // where will this function be used? the form <input>'s onChange handler
  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = {...formValues, [inputName]:inputValue};
    setFormValues(updatedFormValues);
  };

  // step 7a: create another helper function that can be used on the Form's 'onSubmit', using the formValues state for props build a new team member, establish best practices, like trimming whitespace from inputs 
  const submitForm = () => {
    const newTeamMember = {
      username: formValues.username.trim(), 
      email: formValues.email.trim(), 
      coderType: formValues.coderType, 
      role: formValues.role, 
    };
    // we don't want the user to be able to submit if any of the fields are left blank. To do this we can prevent further action by using a conditional: 
    if (!newTeamMember.username || !newTeamMember.email || !newTeamMember.coderType || !newTeamMember.role) return; 
    // if (! - Not Operator) no username, and/or no email, and/or no coderType and/or no role selected - return to the empty form
    // step 7b: Now that the user has entered information, and not left any fields blank - we need to send that info somewhere! Post the new team member to our back-end, on successful update the team list we set in current state in step 4 will add the new team member. 
    fakeAxiosPost('fakeapi.com', newTeamMember)
    .then(res => {
      // on successful send 
      const teamMemberFromApi = res.data; 
      // call team setter, and set the new data, but don't overwrite!  
      setTeam([teamMemberFromApi, ...team]); 
      // now that we've added our team member, the form should return cleared to the original values, which are declared in state
      setFormValues(initialFormValues);
    });
  };

  // QUESTION: What exactly is being done here? How is it affecting the code? 
  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeam(res.data));
  }, []); 
  // step 8: Now we have to put some meat on the form's bones, so then we will know what props it needs to do its job. 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Build-A-Team</h1>
      </header>
      <p>Build your perfect team, where the style guru puts on too many patches, the unseen and unappreciated fabric heart is the back-end guy, and those front-enders are all the stuffing.</p>
      {/*step 8b: Render the MemberForm to the DOM - MAKE SURE IT IS IMPORTED */}
      {/*step 8c: pass props to the MemberForm component*/}
      <MemberForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
