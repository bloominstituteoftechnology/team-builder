import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import Team from './Components/TeamMember';
import axios from './Axios';


const initialValues ={
  username: '',
  email: '',
  role: '',
};

function App() {
  const [friends, setFriends] = useState([]);

  const [createValue, setCreateValue] = useState(initialValues);

  return (
    <div className="App">
      <Form
      values={createValue}
      />

      {friends.map((friend) => {
        return <Team key={friend.id} details={friend} />;
      })}
    </div>
  );
}

export default App;
