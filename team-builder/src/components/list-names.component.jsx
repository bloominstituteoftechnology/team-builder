import React from 'react'

const ListNames =(props) =>{
    console.log("listname:",props)

    
    return (
        <div>
            {
                props.teamNames.map(name =>(
                    <div>
                        <h2>{name.name}</h2>
                        <p>{name.email}</p>
                        <p>{name.role}</p>
                    </div>
                ))
            }
        </div>
    )
}



export default ListNames

{/* <div className="note-list">
{props.notes.map(note => (
  <div className="note" key={note.id}>
    <h2>{note.title}</h2>
    <p>{note.body}</p>
  </div>
))}
</div>
); */}