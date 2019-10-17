import React,{useState} from 'react';
import ReactDOM from 'react-dom';



const TeamMemebersForm = props => {
const [note, setNote] =useState({
    name: "",
    Email: "",
    role: ""
});
const changeHandler = event => {
    setNote({...note, [event.target.name] : event.target.value})

}

const submitForm = event =>{
    event.preventDefault();
    props.addNewNote(note);
    setNote({name: "", Email: "", role: "", })
};

return(
    <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
        name="name"
        id="name"
        type="text"
        placeholder="name"
        onChange={changeHandler}
        value={note.name}/>

        <label htmlFor="Email">Email</label>
        <input
        name="Email"
        id="Email"
        type="text"
        placeholder="Email"
        onChange={changeHandler}
        value={note.Email}/>

        <label htmlFor="role">Role</label>
        <input
        name="role"
        id="role"
        type="text"
        placeholder="role"
        onChange={changeHandler}
        value={note.role}/>
        <button type = "submit">Submit</button>
    </form>
    
);
};

export default TeamMemebersForm;