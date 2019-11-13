import React, { useState} from 'react';

let team = [

    {
      id: 0,
      name: "Dave",
      email: "dave@thisemail.com",
      role: "Bus driver",
    },
    {
      id: 1,
      name: "Mike",
      email: "mike@thisemail.com",
      role: "Banker",
    },
    {
      id: 2,
      name: "Bill",
      email: "bill@thisemail.com",
      role: "Programmer",
    }
  ];
  

const Form = props => {

    const [Members, addNewMember ] = useState([...team]);

    const [currentForm, changeForm] = useState ({
        name: "",
        email: "",
        role: "",
    });

    const handleFormChange = event => {
        changeForm({...currentForm, [event.target.name]:
        event.target.value })
    };

    const handleSubmit = e => {
        // Preventing the form submit from refreshing the page
        // preventing default form submission behaviour
        e.preventDefault();
        // For seeing all the event properties in the console
        e.persist();
        console.log(e);
        // We can log the values of each input within the form
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.role.value);
      };


        return(
            <div className="Forms">
            <form onSubmit={handleSubmit}>
              <label htmlFor="currentForm_name"> name </label>
              <input
                type="text"
                name="username"
                id="currentForm_username"
                placeholder="Enter your username here"
                onChange={handleFormChange}
                // We are telling our input what its value should be
                // It's value corresponds to its property in state
                value={currentForm.name}
              />
      
             
            </form>
          </div>
        );
      }
      
        



export default Form