import React, {useState} from 'react';
import styled from "styled-components";

const FormDiv = styled.div`
   color: yellow;
   font-size: 2.5rem;
   input {
       font-size:2.5rem;
       border-radius: 5px;
       text-align: center;
       margin: 1%;
   }
   select {
       background: yellow;
    font-size: 2rem;
   }
   button {
       font-size: 3rem;
       color: white;
       background: dodgerblue;
       margin: 3%;
       border-radius: 8px;
       width: 15%;
   }
`;

export default function Form(props) {

    const [input, setInput] = useState({
        name: "",
        email: "",
        role: ""
    });
    const changeHandler = event => {
        setInput({ ...input, [event.target.name]: event.target.value });
        console.log(event.target.value);
      };

      const submitInfo = event => {
        event.preventDefault();
        props.submit(input)
        setInput({name: "", email: "", role: ""})
        console.log("I'm submitting :")
      }
    return (
        <FormDiv>
            <form onSubmit={submitInfo}>
                <label htmlFor="title">   Name   </label>
                    <input 
                         name="name"
                         id="name"
                         type="text"
                         placeholder="Name"
                         onChange={changeHandler}
                         value={input.name}
                    />
                    <br />
                  

                <label htmlFor="email">   email   </label>
                    <input 
                         name="email"
                         id="email"
                         type="text"
                         placeholder="email"
                         onChange={changeHandler}
                         value={input.email}
                    />
                   <br />

                <label htmlFor="role">  Role </label>
                    <select 
                    name="role" 
                    id="role" 
                    type="text"
                    onChange={changeHandler}
                    value={input.role}>
                        <option>GoFour</option> 
                        <option>UI</option>  
                        <option>UX</option>  
                        <option>Front End Developer</option>  
                        <option>Back End Developer</option>  
                        <option>Project Manager</option>  
                    </select>
                     <br />
                    <button type='submit'>  Submit    </button>
            </form>
        </FormDiv>
    )
};
