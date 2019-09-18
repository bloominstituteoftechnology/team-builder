import React, {useState} from "react";

function Form(props){
    const [newMember, SetNewMember] = useState({
        memberName: "",
        email: "",
        role: ""
    });
   
    const handleChange = e => {
        SetNewMember({
         ...newMember,   
         [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.setMembers([...props.members, newMember])
        resetsForm(e);
    }
   
    const resetsForm = e =>{
        e.preventDefault();
        SetNewMember({
            memberName: "",
            email:"",
            role: ""
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="memberName"
                    id=""
                    value={newMember.memberName}
                    placeholder="first and last name">
                </input>
                <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    id=""
                    value={newMember.email}
                    placeholder="email">
                </input>
                <input
                    onChange={handleChange}
                    type="text"
                    name="role"
                    id=""
                    value={newMember.role}
                    placeholder="role">
                </input>

                <button type="submit">submit</button>

            </form>
        </div>
    )
}

export default Form;