import React from 'react';

const Memebers = props => {
    return (
        <div className='team-list' style={{display:`flex`, margin:`54px 150px`, flexWrap:'wrap'}}>
            {props.teamMembers.map(member => {
                return (
                    <div className="member" key={member.id} style={{border: `1px solid black`, padding:`32px`, width:`250px`,  margin:`0 auto`,  boxShadow: `0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24)`}}>
                        <h3>{member.role}</h3>
                        <div>
                            <h4>{member.name}</h4>
                            <p>
                                <a href={`mailto:${member.email}`}>{member.email}</a>
                            </p>
                            <button onClick={() => props.addMemberToEdit(member)}>Edit</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Memebers;