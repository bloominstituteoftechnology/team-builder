import React from 'react'

const Member = props => {
    return (
        <div className='note-list'>
            {props.memberValues.map(note => (
                <div className='noteclass' key={note.id}>
                    <h2>Name: {note.name}</h2>
                    <h3>Email: {note.email}</h3>
                    <h4>Role: {note.role}</h4>
                </div>
            ))}
        </div>
    )
}

export default Member;