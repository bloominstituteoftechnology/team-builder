import React, {useState} from 'react'


const Form =() =>{
    const [teamNames, setTeamNames] = useState({
        firstName: "",
        lastName: ""
    });

    const handleChange = event => {
        setTeamNames({ ...teamNames, [event.target.name]: event.target.value });
      };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(teamNames.firstName);
        console.log(teamNames.lastName)
        setTeamNames({firstName: '',lastName: ''});
    }

    return (
        <div>
        {console.log(teamNames)}
        <form onSubmit={event => handleSubmit(event)}>
            <label>
                First Name:
                <input 
                    type="text"
                    name="firstName"
                    onChange={event => handleChange(event)}

                />
            </label>
            <label>
                Last Name:
                <input 
                    type="text"
                    name="lastName"
                    onChange={event => handleChange(event)}
                />
                <button>Submit!</button>
            </label>
        </form>
        
        </div>
    )
}


export default Form