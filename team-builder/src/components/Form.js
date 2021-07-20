/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.2 Team Builder project Form.js
 * 7/20/2021
 **/

//Import statements
import React, {useState} from "react";
// import { ReactDOM } from "react";
// import { render } from "react-dom";

//Dummy data array
const dummyData = 
[
    { name: "Jesse Johns", email: "space@cadet.com", role: "Spacey Cadet" },
    { name: "John Glenn", email: "john@glenn.com", role: "Astronaut" },
]

//Set initial values
const initialFormValues = { name: " ", email: " ", role: " " }

//Form function definition
export default function Form()
{
    //Set state
    const [team, setTeam] = useState(dummyData);
    const [formValues, setFormValues] = useState(initialFormValues);

    //Change event function, takes event param
    const change = (event) => 
    {
        //
        const { value, name } = event.target;
        //...spread copies form, overwrites name [is a key] with value
        setFormValues({...formValues, [name]: value})
    }

    //Submit function takes event parameter
    const submit = (event) => 
    {
        //Prevent refresh on submit
        event.preventDefault();
        //New team to hold updated members
        const newTeam = 
        {
            //Assign values, trim empty strings space
            name: formValues.name.trim(),
            role: formValues.role.trim(),
            email: formValues.email.trim(),
        }

        //call the state setValue functions
        //Copy from dummyData to newTeam
        setTeam([...team, newTeam]);
        //set form values 
        setFormValues(initialFormValues);
    }

    //Return function
    return (
        <div className = "container">
            <h1>Form Project</h1>
            {/* Map over the team array */}
            {team.map((teamO, idx) => (
            <div key={idx}>
                {/*Interpolate values  */}
                {teamO.name} is {teamO.role} and can be reached at {teamO.email}
            </div>
             ))}

            {/* Form begins  */}
            <form onSubmit = {submit}>
                {/* Name Label */}
                <label htmlFor = "teamName"> Name </label>
                {/* Input takes 5 attributes */}
                <input
                id = "teamName"
                name = "name"
                placeholder = "name"
                type = "text"
                onChange = {change}
                />

                {/* Role Label */}
                <label htmlFor = "role"> Role </label>
                {/* Input takes 5 attributes */}
                <input
                id = "role"
                name = "role"
                placeholder = "role"
                type = "text"
                onChange = {change}
                />

                {/* Email Label */}
                 <label htmlFor = "role"> Email </label>
                {/* Input takes 5 attributes */}
                <input
                id = "email"
                name = "email"
                placeholder = "email"
                type = "text"
                onChange = {change}
                />
                <button>SUBMIT THIS!</button>
            </form>
        </div>
    )
}