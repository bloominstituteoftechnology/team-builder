import React, { useState } from "react";
// import AddMember from './Components/AddMember'
import Members from './Components/Member'
// import data from './data'
import './App.css';

function App() {

const [memberState, addMemberState] = useState({
  name: '',
  email: '',
  role: ''
})

  const submitHandler = event => {
    event.preventDefault();
  };

  const changeHandler = event => {
    console.log(memberState);
    addMemberState({...memberState, [event.target.name]: event.target.value 
    });
  };



  return (
    <div className="App">
      <header>
        Add Member
        <form onSubmit={submitHandler}>
            <label >
              Name
                <input
                  type="text"
                  name='name'
                  placeholder='Enter your name'
                  onChange={changeHandler}
                />
            </label>
            <label >
              Email
                <input
                  type="text"
                  name='email'
                  placeholder='Enter your email'
                  onChange={changeHandler}
                />
            </label>
            <label >
              Role
                <input
                  type="text"
                  name='role'
                  placeholder='Enter your role'
                  onChange={changeHandler}
                />
            </label>
            <button>Submit</button>
        </form> 
      </header>
        <body>
          <Members />
        </body>
    </div>
  );
}

export default App;
