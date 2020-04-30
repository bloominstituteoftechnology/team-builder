import React, {useState} from 'react';




const TeamForm = (props) => {

  const {setInputMembers, inputMembers} = props;
      
const [inputMember, setInputMember] = useState({member: "", role:  "", email: ""});

const handleTeamChange = event => {
  setInputMember({ ...inputMember, [event.target.name]: event.target.value });
};

const handleSubmit = event => {
  event.preventDefault();
  setInputMembers([...inputMembers, { ...inputMember, id: Date.now() }]);
  setInputMember([{member: "", role: "", email: ""}]);
  console.log(inputMember.member);
  console.log(inputMember.role);
  console.log(inputMember.email);
};

return (
    <form onSubmit={handleSubmit}>
        <label>
        Team Members:
        <input  type="text" value={inputMember.member} name="member" onChange={event => handleTeamChange(event)}  />
        </label>
        <label>
        Email:
        <input  type="email" value={inputMember.email} name="role" onChange={event => handleTeamChange(event)}  />
        </label>
        <label>
        Role:
        <input  type="text" value={inputMember.role} name="email" onChange={event => handleTeamChange(event)}  />
        </label>

        <button>Submit</button>
    </form>
)
}

export default TeamForm;