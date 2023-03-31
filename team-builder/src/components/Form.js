import React, { useState, useEffect } from 'react';

const Form = props => {

    const [formInfo, setFormInfo] = useState({
        name: '',
        email: '',
        role: '',
        id: null
    })

    useEffect( () => {
        let id = Math.max(...props.teamMemberList.map( teamMem => teamMem.id ))
        if(id < 0) {
            id = 0;
        }
        setFormInfo({
            ...formInfo,
            id
        })
    }, [formInfo, props.teamMemberList]);

    const onChangeHandler = event => {
        event.preventDefault();
        setFormInfo({
            ...formInfo,
            [event.target.name] : event.target.value
        })
    }
    
    const onSubmitHandler = event => {
        event.preventDefault();
        props.setTeamMemberList([
            ...props.teamMemberList,
            formInfo
        ])
        setFormInfo({
            name: '',
            email: '',
            role: '',
            id: formInfo.id + 1
        })
    }
    const [val, setVal] = useState();
    return(
        <div className="form-container">
            <h2>Add Team Member:</h2>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="name">
                    Name:
                    <input onChange={onChangeHandler} value={formInfo.name} type="text" name="name" id="name" placeholder="Team member name" required />
                </label>
                <label htmlFor="email">
                    Email:
                    <input onChange={onChangeHandler} value={formInfo.email} type="email" name="email" id="email" placeholder="Team member email" required />
                </label>
                <label htmlFor="role">
                    Role:
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
                <button type="submit">Add Team Member</button>
                 <input type="text" value={val} />
                <button onClick={() => setVal(() => "")}>Reset</button>
            </form>
        </div>
    );
};

export default Form;