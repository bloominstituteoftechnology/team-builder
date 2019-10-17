import React, {useState} from "react";

const TeamForm = props =>{
    const [team, setTeam] = useState({
        name:'',
        email:'',
        role: ''
    });

    const addMember = (event) =>{
        setTeam(
            {...team, [event.target.name]: event.target.value}
        );
     };

     const submitForm = event => {
         event.preventDefault();
         props.addNewTeamMember(team);
         setTeam({name:'', email:'', role:''});
     }

    return (
        <form onSubmit={submitForm} className="team-form">
            <label htmlFor="name">Name: </label>
            <input name='name' id='name' type="text" placeholder="Name" onChange={addMember} value={team.name}/> 

            <label htmlFor="name">Email: </label>
            <input name='email' id='email' type="text" placeholder="Email" onChange={addMember} value={team.email}/>            

            <label htmlFor="role">Choose your current role: </label>           
              
         <input list="roles" id="role-choice" name="role-choice" /> 
         <button type="submit">Add New Team Member</button>

            <datalist id="roles">
                <option value=" Web Design" />
                <option value=" HTML, CSS" />
                <option value=" Front-End Developer" />
                <option value=" Back-End Developer"/>
                <option value=" Junior Software Developer"/>
                <option value=" Senior Software Developer"/>
                <option value=" Product Manager"/>
            </datalist>           
        </form>
    );
}


export default TeamForm;