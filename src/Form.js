import React, { useState } from "react";
import { v4 as uuid } from 'uuid';



const teamMembers = [
    {id: uuid(), name: 'lexi', email: 'lexi@lambda.com', role: 'developer'},
    {id: uuid(), name: 'jeff', email: 'jeff@lambda.com', role: 'programer'},
    {id: uuid(), name: 'andre', email: 'andre@lambda.com', role: 'team lead'}
  ]
  
function OurTeam() {
  
    const [members, setMembers] = useState(teamMembers)
    const [value, setValue] = useState(
      {
        name: '',
        email: '',
        role: '',
      }
    )
  
    const inputChange = event=> {
        const changeName = event.target.name;
        const changeValue = event.target.value;

        setValue({...value, [changeName]: changeValue,})
    }

    const formSubmit = event => {
        event.preventDefault();

        const newMember = {
            id: uuid(),
            name: value.name,
            email: value.email,
            role: value.position,
        }

        setMembers([...members, newMember])
    }


  
  
    return (
      <div>
        <form onSubmit={formSubmit}>
            <label>Employee Name
                <input 
                    name="name"
                    placeholder="Name"
                    value={value.name}
                    onChange={inputChange}
                />
            </label>

            <label>Email
                <input
                    name="email"
                    placeholder="Email"
                    value={value.email}
                    onChange={inputChange}
                />
            </label>

            <label>Role
                <input 
                    name="role"
                    placeholder="Role"
                    value={value.role}
                    onChange={inputChange}
                />
            </label>

            <input type='submit'/>
          </form>
            <h2>Employee List</h2>
            
            {
            members.map(fr => <div key={fr.id}>{fr.name} {fr.email} {fr.role}</div>)
            }
        </div>
    )
  }

export default OurTeam;
