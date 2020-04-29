import React, {useState} from 'react';




const TeamForm = () => {

      
const [inputMember, setInputMember] = useState({member: "", role:  "", email: ""});

const handleTeamChange = event => {
  setInputMember({ ...inputMember, [event.target.name]: event.target.value });
};

const handleSubmit = event => {
  event.preventDefault();
  console.log(inputMember.member);
  console.log(inputMember.role);
  console.log(inputMember.email);
};

return (
    <form onSubmit={event => handleSubmit(event)}>
        <label>
        Team Members:
        <input  type="text" name="member" onChange={event => handleTeamChange(event)}  />
        </label>
        <label>
        Email:
        <input  type="email" name="role" onChange={event => handleTeamChange(event)}  />
        </label>
        <label>
        Role:
        <input  type="text" name="email" onChange={event => handleTeamChange(event)}  />
        </label>

        <button>Submit</button>
    </form>
)
}

export default TeamForm;