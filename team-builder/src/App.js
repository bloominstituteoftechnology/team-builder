import React , {useState} from 'react';
import './App.css';
import Form from "./Form";
import TeamMembers from "./teamMembers";

function App(){
  const [list, setList] = useState([]);

  const addNewMember = (formData) => {
    const newMember = {
      id:Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };
    setList([...list, newMember]);
    const memeberToEdit = (props) => {
      const oldMember = {
        name:props.name,
        email: props.email,
        role: props.role,
      };
      setList ([...list, oldMember]);
    }

    return(

      <div className = "App">
        <header className = "App-header">
          <h1>TeamMembers</h1>
          <form addNewMember={addNewMember}/>
          <TeamMembers list={list} memeberToEdit ={memeberToEdit} />
        </header>
      </div>
  );

  }
  

}

export default App;
