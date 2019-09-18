import React, { useState } from "react";
import styled from "styled-components";


const FormContainer = styled.form`
display: flex;
flex-direction: column;
`;

const TitleContainer = styled.div`

`;

const DescriptionContainer = styled.div`

`;

const TeamForm = props => {

    console.log(props);
        //add State and setState

    const [team, setTeam] = useState({
        title: "",
        body: ""
    });

    const handleChanges = event => {
        setTeam({...team, [event.target.name]: event.target.value });
        console.log(team)
    };

    const submitForm = event => {
        event.preventDefault();
        //Console log props shows addnewTeam not(addNewTeam)
        props.addNewTeam(team);
        setTeam({ title: "", body: "" });
    };

    return (
        <FormContainer onSubmit={submitForm}>

          <label htmlFor="title">Team Title</label>
    
          <input
            id="title"
            type="text"
            name="title"
            onChange={handleChanges}
            value={team.title}
          />
    
          <label htmlFor="team">Team Description</label>
    
          <textarea
            id="team"
            type="text"
            name="body"
            onChange={handleChanges}
            value={team.body}
          />
    
          <button type="submit">Add Team</button>
        </FormContainer>
      );
    };
    
    export default TeamForm;

