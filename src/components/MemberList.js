import React, { useState} from 'react';

const MemberList = props => {
    const [member, setMember] = useState({id: Date.now(), name: "", email: "", role: ""});
  
    const handleChanges = event => {
      setMember({ ...member, [event.target.name]: event.target.value});
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      props.addNewMember(member);
      setMember({ name: "", email: "", role: "" });
    };
  
    return (
      <div style={{border:"1px solid black", padding:"10px", marginRight:"60%",}}>
        <form onSubmit={handleSubmit}>
          <h1>Add New Member:</h1>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text" id="name" name="name" value={member.name} onChange={handleChanges}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email" id="email" name="email" value={member.email} onChange={handleChanges}
          />
          <br />
          <label htmlFor="role">Role:</label>
          <br />
          <input
            name="role" id="role" value={member.role} onChange={handleChanges}
          />
          <br/>
          <br/>
          <label htmlFor="addMember"></label>
          <button type="submit" id="addMember"> Submit</button>
          <br/>
          <br/>
        </form>
      </div>
    );
  };
  

export default MemberList;