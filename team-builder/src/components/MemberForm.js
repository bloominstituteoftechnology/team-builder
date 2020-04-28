import React, {useState, useEffect} from 'react';

const MemberForm = (props)=>{
  const [member, setMember] = useState({id: "", name:"", email:"", role:"" })

  const handleChanges = event=>{
    setMember({ ...member, [event.target.name]:event.target.value });
  }

  const submitForm = event =>{
    event.preventDefault();
    if (props.memberToEdit.name){
      console.log("member to edit: " + props.memberToEdit.id);
      member.id = props.memberToEdit.id;
      props.editTeamMember(member);
      setMember({id:"", name:"", email:"", role:"" });
    } else{
      if (member.name!==''){
        props.addTeamMember(member);
        setMember({id: "", name:"", email:"", role:"" });
      } else{
        alert('Please Enter Name!');
      };
    }
  }

  useEffect(() => {
    setMember(props.memberToEdit);
  },[props.memberToEdit]);

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input 
        id="name"
        type="text"
        placeholder="Enter Name"
        value={member.name}
        name="name"
        onChange={handleChanges}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        placeholder="Enter Email"
        value={member.email}
        name="email"
        onChange={handleChanges}
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        type="text"
        placeholder="Enter Role"
        value={member.role}
        name="role"
        onChange={handleChanges}
      />
      <button type="submit">  { (props.memberToEdit.name) ? "Edit Member" : "Add Member"}  </button>
    </form>
  );
};

export default MemberForm;
