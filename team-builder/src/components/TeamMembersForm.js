import React from 'react';

const TeamMembersForm = () => {

    return (
        <form>
            <label>Name <input type="text" placeholder="Name" name="name"/></label>
            
            <label>Email <input type="email" placeholder="Email" name="email"/></label>
            <br />
            <label> Role
                <select>
                    <option>--Select--</option>
                    <option>Frontend Engineer</option>
                    <option>Backend Engineer</option>
                    <option>Fullstack Engineer</option>
                    <option>Data Scientist</option>
                    <option>Designer</option>
                </select>
            </label>
        </form>
    )

}

export default TeamMembersForm;