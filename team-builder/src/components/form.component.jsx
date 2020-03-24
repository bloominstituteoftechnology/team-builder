import React, {useState} from 'react'


const Form =(props) =>{
    console.log("formprops",props)
    const [teamNames, setTeamNames] = useState([{
        name: "",
        email: "",
        role: ""
    }]);
    
       

    const handleChange = event => {
        setTeamNames({ 
            ...teamNames, 
            [event.target.name]: event.target.value });
      };

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(teamNames.name);
        // console.log(teamNames.email)
        // console.log(teamNames.role)

        props.addNewName(teamNames);
        setTeamNames({
            name:"", 
            email: "",
            role:''
        });
    }
    console.log("form:",teamNames)
    return (
        <div>
        {/* {console.log(teamNames)} */}
        <form onSubmit={handleSubmit}>
            <label>Full Name</label>
                <input 
                    type="text"
                    name="name"
                    value={teamNames.name}
                    onChange={handleChange}
                    
                />            
            <label>Email</label>   
                <input 
                    type="text"
                    name="email"
                    value={teamNames.email}
                    onChange={handleChange}
                />
            <label>Role</label>
                <input 
                    type="text"
                    name="role"
                    value={teamNames.role}
                    onChange={handleChange}
                />
            <button>Submit!</button>
        </form>
        </div>
    )
}


export default Form