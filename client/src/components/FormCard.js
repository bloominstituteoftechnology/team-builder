import React, {useState} from "react";
import styled from "styled-components";

const EditHeader = styled.form`
    width: 800px;
    margin: 0 auto;
    box-shadow: 20px 20px 10px #FFA07A;
    border: 1px solid black;
    padding-bottom: 20px;
    border-radius: 10px 50px; 
    margin-top: 50px; 
`;

const TeamCard = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 50px; 
    box-shadow: 20px 20px 10px grey;
    border-radius: 10px 50px; 
    border: 1px solid black;
    padding-bottom: 20px;
`;

const EditChild = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;

const EditMember = styled.h1`
    color: black;
    
`;

const EditButton = styled.button`
    border-radius: 20px;
    &:hover{
        background: #DCDCDC;
        border-radius: 20px;
        border: 1px solid lightgrey;
    }
`;

const FormCard = (props) => {
    console.log(`FormCard props`, props);
    const {name, email, role, id } = props.member;

    const [input, setInput] = useState({
        name: name,
        email: email, 
        role: role,
        id: id
    });
    const [editing, setEditing] = useState(false);

    const handleEdit = event => {
        setEditing(!editing);
    };

    const inputHandler = event => {
        console.log("target name", event.target.name);
        console.log("value", event.target.value);
        setInput({...input, [event.target.name]: event.target.value });
    };

    const handleUpdate = event => {
        event.preventDefault();
        props.update(input);
        setEditing(false);
    };

    console.log ("edit", editing);


    return editing ? (
        <EditHeader onSubmit={handleUpdate}>
            <EditMember>Edit Team Member</EditMember>
            <EditChild>
                <label htmlFor="name">Name: {" "}
                    <input 
                        id= "name"
                        type= "text"
                        name= "name"
                        onChange= {inputHandler}
                        value={input.name}
                    />
                </label>
                <label htmlFor="email">Email: {" "}
                    <input 
                        id= "email"
                        type= "text"
                        name= "email"
                        onChange= {inputHandler}
                        value={input.email}
                    />
                </label>
                <label htmlFor="role">Role: {" "}
                    <input 
                        id= "role"
                        type= "text"
                        name= "role"
                        onChange= {inputHandler}
                        value={input.role}
                    />
                </label>
                <EditButton type="submit">Add a team member!</EditButton>
            </EditChild>
        </EditHeader>
    ) : (
        <TeamCard>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
            <EditButton onClick={handleEdit}>Edit</EditButton>
        </TeamCard>
    )
}

export default FormCard;

//Version 1 - original code that works 
// import React from "react";
// import styled from "styled-components";

// const TeamCard = styled.div`
//     max-width: 800px;
//     margin: 0 auto;
//     margin-top: 50px; 
//     box-shadow: 20px 20px 10px grey;
//     border-radius: 10px 50px; 
//     border: 1px solid black;
//     padding-bottom: 20px;
// `;

// const FormCard = props => {
//     console.log(props);
//     return (
//         <>
//             {props.members.map(member => (
//                 <TeamCard className="member" key ={member.id}>
//                     <div>
//                         <h2>Name: {member.name}</h2>
//                         <p>Email: {member.email}</p>
//                         <p>Role: {member.role}</p>
//                         <button>Edit</button>
//                     </div>
//                 </TeamCard>
//             ))}
//         </>
//     )
// }

// export default FormCard;