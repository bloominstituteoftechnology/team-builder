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
  const [note, setNote] = useState({id:"", number: "", name: "" });
  const [indx,setIndx] = useState(index);
  const handleChanges = (event) => {
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
    <form onSubmit={submitForm}>
      <label htmlFor="note">Player's Team Number</label>
      <input
        id="number"
        type="text"
        placeholder="Enter Team Number"
        onChange={handleChanges}
        value={note.number}
        name="number"
      />
      <label htmlFor="note">Player's Name</label>
      <textarea
      contentEditable={true}
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
  );
};

export default Sharedtextarea;