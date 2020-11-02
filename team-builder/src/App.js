import React, { useState } from "react";
import UserForm from "./UserForm";
import UserCard from "./UserCard";
import data from "./data";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState(data);
  console.log(userInfo);

  const addNewUser = (user) => {
    const newUser = {
      name: user.name,
      age: user.age,
      photo: user.photo,
      bio: user.bio,
    };

    setUserInfo([...userInfo, newUser]);
  };

  return (
    <div className="App">
      <UserForm addNewUser={addNewUser} />
      <UserCard userInfo={userInfo} />
    </div>
  );
}

export default App;
