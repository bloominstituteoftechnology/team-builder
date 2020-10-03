import React, { useState } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import '../index.css';
import './body.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoins } from '@fortawesome/free-solid-svg-icons'
// import { faFlag } from '@fortawesome/free-solid-svg-icons'
// import { fas  } from '@fortawesome/free-solid-svg-icons';
// import { faCoffee  } from '@fortawesome/free-solid-svg-icons'

// const coffe = <FontAwesomeIcon icon={faCoins} />;
// const flap = <FontAwesomeIcon icon={faFlag} />;
// const cof = <FontAwesomeIcon icon={faCoffee} />;


const Body = (props) => {
  const handleDelete = (index) => {
    props.deleteNote(index);
  };
  const handleEdit = (index) =>{
    console.log(props.notes[index].name);
    props.editNote(index);

  };
  return (
    <div className="note-list">
      {props.notes.map((note, index) => (
        <div className="note" key={note.id}>
          <h2>{note.number}</h2>
          <p>{note.name}</p>
          <button onClick={(e) => handleEdit(index)}>Edit</button>
          <button onClick={(event) => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};




export default Body;