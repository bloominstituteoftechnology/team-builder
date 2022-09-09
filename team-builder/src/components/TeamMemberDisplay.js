import React, { useState } from 'react';

const TeamMemberDisplay = props => {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ formInfo, setFormInfo ] = useState({
        name:  props.teamMember.name,
        email: props.teamMember.email,
        role:  props.teamMember.role,
        id:    props.teamMember.id
    })

    const onChangeHandler = event => {
        event.preventDefault();
        setFormInfo({
            ...formInfo,
            [event.target.name] : event.target.value
        })
    }
    
    const saveChanges = () => {
        props.setTeamMemberList([
            ...props.teamMemberList.slice(0,formInfo.id),
            Object.assign({}, props.teamMemberList[formInfo.id], formInfo),
            ...props.teamMemberList.slice(formInfo.id+1)
        ]);
        setFormInfo({
            name:  props.teamMember.name,
            email: props.teamMember.email,
            role:  props.teamMember.role,
            id:    props.teamMember.id
        });
        editTeamMember();
    }

    const editTeamMember = () => {
        setIsEditing( !isEditing );
    }    

    return(
        <tr>
            <td>Name:</td>
            <td>{isEditing ? <input type="text" name="name" id="name" onChange={onChangeHandler} value={formInfo.name} /> : props.teamMember.name}</td>
            <td>Email:</td>
            <td>{isEditing ? <input type="email" name="email" id="email" onChange={onChangeHandler} value={formInfo.email} /> : props.teamMember.email}</td>
            <td>Role:</td>
            <td>{isEditing ? (
                <label htmlFor="role">
                    <select onChange={onChangeHandler} value={formInfo.role} name="role" id="role" required>
                        <option value="">Pick a role</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Web Designer">Web Designer</option>
                        <option value="UX Designer">UX Designer</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Team Lead">Team Lead</option>
                    </select>
                </label>
             ) : props.teamMember.role}</td>
            <td>
                { isEditing ?
                    <button className="save" onClick={saveChanges}>Save</button>
                :
                    <button className="edit" onClick={editTeamMember}>Edit</button> 
                }
            </td>
        </tr>
    );
};

export default TeamMemberDisplay;