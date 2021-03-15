import React, {useState} from "react";
import Form from "./Form.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {

  // Import & lift state from form to add to friend list.
  // const [friend, setFriend] = useState(friends);




  return (
    <div className="App container d-flex justify-content-center">
      <div className="form-card d-flex justify-content-center">
        <div className="player-trans">  
        <h1>Team Builder</h1>  
        <p> Add new Team members below</p>
            </div>
        <Form />
      </div>
    </div>
  );
}


