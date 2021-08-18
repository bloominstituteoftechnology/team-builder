import React,{useState} from "react";

const ListOfMember = (props) => {

    const [member,setMember] = useState({name: "", lastName: "", email: ""})



    const handleChange = (event) => {
    setMember({...member,[event.target.name]: event.target.value});
    };

    const submit = (event) => {
        event.preventDefault();
        props.addNewMembers(member)
        setMember({name: "", lastName: "", email: ""})
        }
    return (
        <div>
{/* edit the onsubmit  later make it equal to  a function*/}
    <form onSubmit={submit} > 
    
        <label htmlFor="name">Name</label>
          <input onChange={handleChange} id="name" name="name" type="text"  placeholder="Enter your name" /> 
          <label htmlFor="name"></label>

       
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} id="lastName" name="lastName" type="text" placeholder="Enter your Last Name" /> 

          <label htmlFor="email">email</label>
          <input onChange={handleChange} id="email" name="email" type="email"placeholder="Enter your email"  /> 

          <button type="submit">Submit </button>
      </form>
   
        </div>


    )
}

export default ListOfMember;