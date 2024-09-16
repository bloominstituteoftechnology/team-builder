import React, {useState} from 'react'

function MemberForm(props) {
  const [member, setMember] = useState({name: "",  email: "", role: "", info: ""});

  // console.log(props);

  const handleChanges = (event) => {
    // console.log(event.target.value);
    setMember({...member, [event.target.name]: event.target.value})
  }

  const submitForm = (event) => {
    event.preventDefault();
    props.addMember(member);
    setMember({name: "", email: "", role: "", info: ""});
  }
  
  
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name" >Name</label>
        <input id="name" type="text" name="name" placeholder="Enter your name" onChange={handleChanges} value={member.name} required/>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" placeholder="Enter your email" onChange={handleChanges} value={member.emal} required/>
        <label htmlFor="role">Role</label>
        <input id="role" type="text" name="role" placeholder="Enter your role" onChange={handleChanges} value={member.role}/>
        <label>Tell us about yourself:</label>
        <textarea name="info" id="info" onChange={handleChanges} value={member.info} required></textarea>
        <button type="submit">Add Member</button>
      </form>
    </div>
  )
}

export default MemberForm
