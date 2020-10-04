import React, { useState } from "react";
import '../App.css';
import '../index.css';
import '../Body/body.css';
// class Sharedtextarea extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <label>Enter value : </label>
//         <input type="textare" 
//           name="textValue"
//           onChange={this.props.handleChange}
//         />
//       </div>
//     );
//   }
// }
const Sharedtextarea = (props,index) => {
  const [note, setNote] = useState({id:props.id, number: props.number, name: props.name });
  const [indx,setIndx] = useState(0);
  const handleChanges = (event) => {
    console.log(props);
    setIndx(index);
    setNote({ ...note, [event.target.name]: event.target.value });
    props.handleEditing(event,indx);
  };

  const submitForm = (event) => {
    // event.preventDefault();
    props.editNewNote(note);
    // setNote({ id: "",number: "", name: "" });
    // setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <div key={props.id}>
      <form onSubmit={submitForm}>
      <label htmlFor="note">Player's Team Number</label>
      {/*
Warning: A component is changing an uncontrolled input of type text to be 
controlled. Input elements should not switch from uncontrolled to controlled
 (or vice versa). Decide between using a controlled or uncontrolled input 
 element for the lifetime of the component. 
 More info: https://fb.me/react-controlled-components
      */}
      <input
        id="number"
        type="text"
        placeholder={props.number}
        onChange={handleChanges}
        value={note.number}
         name="number"
      />
      <label htmlFor="note">Player's Name</label>
      <textarea
      // contentEditable={true}
       type="text"
        id="note"
        placeholder={props.name}
        value={note.name}
        onChange={handleChanges}
         name="name"
      />
      <button type="submit">Edit Player</button>
      <button onClick={(event) => props.handleDelete(indx)}>
        Delete Player
      </button>
    
    </form>
    </div>
  );
};

export default Sharedtextarea;