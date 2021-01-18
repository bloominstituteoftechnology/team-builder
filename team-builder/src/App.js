import React, { useState, useEffect } from 'react'
import TeamMember from './components/TeamMember'
import TeamMemberForm from './components/TeamMemberForm'
import './App.css';

import axios from 'axios'

const initialFormValues = {
  name: "" , //Name of House
  region: "" 

}

export default function App() {
    const [members, setMembers] = useState([]);
    //setting the members to an empty array - b/c that's how the data displays
    const [formValues, setFormValues] = useState(initialFormValues);
    //a slice of state holding all the form values

    const updateForm =(inputName, inputValue) => {
      console.log("Update Form is Working: ", inputName, inputValue)//Check the console to see what these are
      setFormValues({...formValues, [inputName]: inputValue});
    }
    //This is a function updating the form, taking the new input key/value pair, rendering the data already there, then adding the newly input info

    const submitForm = () => {  //This is using the api to add data to the form
      const newMember = {
        name: formValues.name.trim(),
        region: formValues.region.trim(),
        
      }
    
      if (!newMember.name || !newMember.region) return;
      setMembers([...members, newMember]) //not using a post request due to lack or permission to post to this  API
      //the axios.post will work with my own API/have ownership of API


     /* axios.post("https://www.anapioficeandfire.com/api/houses", newMember)
      .then((res) => {
        console.log(res)
        setMembers([...members, newMember]) //spread operator - like unpackaging data, think zip files
        setFormValues(initialFormValues) //This is resetting the form to the initial empty values
      })
      .catch((err) => {
        console.log('Error:', err);
      });*/
    }//End of submitForm bracket

    //API CALL// --*just* getting the data
    useEffect(() => {
      
      axios.get("https://www.anapioficeandfire.com/api/houses")
      .then(res => {
        
        setMembers(res.data)
        console.log("result:", res.data)
      })
      .catch((err) => {
        console.log('Error', err)
      })

    }, []);




    return (
      <div className="container">
        <h1>Team Form</h1>

        <TeamMemberForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />

        {
        members.map((kingdom, index) => {
          return(
            <TeamMember key={index} details={kingdom}/> //you must set the key to something individually unique in property, so that the .map doesn't throw an error, in this case, i'm using just the index
          )
        })
      }
    </div>
  );
}

  



  

