import React, {useState} from 'react';

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
        <div>
            <form onSubmit={submitInfo}>
                <label htmlFor="title">Name</label>
                    <input 
                         name="name"
                         id="name"
                         type="text"
                         placeholder="Name"
                         onChange={changeHandler}
                         value={input.name}
                    />
                     <br />

                <label htmlFor="email">e-mail </label>
                    <input 
                         name="email"
                         id="email"
                         type="text"
                         placeholder="email"
                         onChange={changeHandler}
                         value={input.email}
                    />
                    <br />

                <label htmlFor="role">Role </label>
                    <select>
                        <option>GoFour</option> 
                        <option>UI</option>  
                        <option>UX</option>  
                        <option>Front End Developer</option>  
                        <option>Back End Developer</option>  
                        <option>Project Manager</option>  
                    </select>
                     <br />
                    <input type='submit' />
            </form>
        </div>
    )
};
