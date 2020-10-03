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
  const [editing,setEditing] = useState(false);
  const handleDelete = (index) => {
    props.deleteNote(index);
  };
  const handleEdit = (index) =>{
   if(editing === false){
    setEditing(true);
    // console.log(props.notes[index].name);
    // props.editNote(index);
   }else
      setEditing(false);

  };
  const handleEditing = (event,index) =>{
    if(editing === true){
     setEditing(false);
     const news = event.target.value;
     console.log(news);
     console.log(props.notes[index].name);
    props.editNote(index,news);
    //  props.editNote(index);
    }else
       setEditing(true);
 
   };
  return (
    <div className="note-list">
      {props.notes.map((note, index) => (
        editing ? <div className="note" key={note.id}>
        <h2>{note.number}</h2>
        <p>{note.name}</p>
        <textarea type="text" onChange={ event => {
          handleEditing(event,index);
        }}value={note.name} />
        <button onClick={(e) => handleEdit(index)}>Edit</button>
        <button onClick={(event) => handleDelete(index)}>Delete</button>
      </div> :<div className="note" key={note.id}>
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