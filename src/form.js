import React, { useState } from 'react';


const Form = (props) => {
    const [name,setName] = useState("")

    const changeHandler = event => {
        console.log(name)
        setName(event.target.value)
    }

    const submitForm = event => {
        event.preventDefault();
        props.addMember(name);
        setName("")
        
    }



    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="member">team member</label>
                <input type="text" placeholder="add team member" id="member" value={name} name="member" onChange={changeHandler}/>
                <button type="submit">add member</button>
             </form>
        </div>
    );
}

export default Form;
