import React, { useState, useEffect } from 'react';
// import { Keyboard, TextInput, StyleSheet } from "react-native";
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
import Sharedtextarea from '../Textarea/Sharedtextarea';

const Body = (props) => {
  const [indx,setIndx] = useState(0);
  const [editing,setEditing] = useState(false);
  const [changing,setChanging] = useState('');
  const [changes,setChanges] = useState({
    id: props.id,number: props.number, name:props.name});

// Passed up prop from textarea child
const editChange = (data) => {

}


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
  const handleChanges = (event) => {
    
  };


  const handleEditing = (event,index) =>{
    // const curChan = props.notes[index].name+changing;
    const news = event.target.value;
    console.log(event.target.value) ;   
    setChanging(event.target.value);

    // const editNote = {
    //   id: props.notes[index].id,
    //   number: props.notes[index].number,
    //   name: changing,
    // }
    // setChanges(editNote);
    // //  setEditing(false);
    //  console.log(changing);
    //  console.log(changes[index].name);
     setChanges({ ...changes, [event.target.name]: event.target.value });
     props.editNote(index,changes);
    //  props.editNote(index);
    
      //  setEditing(true);
   };

   const editNewNote = (note) => {
    const newNote = {
      id: Date.now(),
      number: note.number,
      name: note.name,
    };

    
      setChanges(newNote);
      
    
  };

 
  return (
    <div className="note-list">
      {props.notes.map((note, index) => (
        editing ? 
          <div className="note" key={index}>
        {/* <input value={changes.number} contentEditable={true} />
        <textarea contentEditable={true} type="text" onChange={ event => {
          handleEditing(event,index);
        }}value={changes.name} />
        <button onClick={e => handleEdit(index)}>Edit</button>
        <button onClick={(event) => handleDelete(index)}>Delete</button> */
        // setIndx(index)
        
        }
        
        <Sharedtextarea  editNewNote={editNewNote} handleEditing={handleEditing}/>
      </div> 
        :<div className="note" key={note.id}>
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