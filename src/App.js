import React, {useState} from 'react';
import Members from "./components/Members.js"
import Form from "./components/Form.js"

function App() {
    const [members, setMembers] = useState([
        {
          id: 1,
          name: "Ryan Ishimari",
          email:"rishimaru23@gmail.com",
          role:"Jr Front-end Engineer"
        },
        {
          id: 2,
          name: "John Doe",
          email:"John@me.com",
          role:"Senior Developer"
        }
      ]);
      const addNewBox = box => {
      const newBox = {
        id: Date.now(),
        name: box.name,
        email: box.email,
        role: box.role
      };
      setMembers([...members, newBox]);
    };
}