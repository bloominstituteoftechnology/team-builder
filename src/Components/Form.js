import React, { useState } from 'react';

const Form = (props) => {
  console.log(props);
  // const setPeople = props.setPeople;
  const { submitPerson, initialPerson, buttonText, history } = props;
  // const [person, setPerson] = useState({name: "", email: "", role: ""});
  const [person, setPerson] = useState(initialPerson || {name: "", email: "", role: ""});
  const handleChange = event => {
    setPerson({...person, [event.target.name]: event.target.value});
  };
  const handleSubmit = event => {
    event.preventDefault();
    submitPerson(person);
    setPerson({name: "", email: "", role: ""});
    history.push("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name"
             value={person.name}
             name="name"
             onChange={handleChange}
      />
      <input placeholder="email"
             value={person.email}
             name="email"
             onChange={handleChange}
      />
      <input placeholder="role"
             value={person.role}
             name="role"
             onChange={handleChange}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;




















// import React, { useState, useEffect } from 'react';

// function Form(props) {

//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     role: "",
//   })
//   const [member, setMember] = useState({
//     name: "",
//     email: "",
//     role: "",
//   })



//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log("submitHandler formState", formState)
//     console.log("teamArray", props.teamArray)
//     props.setTeamArray([
//       ...props.teamArray,
//       formState
//     ])
//     setFormState({
//       name: "",
//       email: "",
//       role: "",
//     })
    
//   };

//   const changeHandler = event => {
//     console.log("formState", formState);
//     setFormState({
//       ...formState,
//       [event.target.name]: event.target.value
//     });
//   };

//   useEffect(() => {
//     console.log("useEffect MTE", props.memberToEdit)
//     setMember({
//       name: member.name,
//       email: member.email,
//       role: member.role,
//     })
//   }, [props.memberToEdit] );

//   return (
//     <div className="form-wrapper">
//       <form
//         className="form" 
//         onSubmit={submitHandler}
//       >
//         <label>
//           Name
//           <input
//             name="name"
//             type="text"
//             placeholder="Enter your name"
//             value={formState.name}
//             onChange={changeHandler}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={formState.email}
//             onChange={changeHandler}
//           />
//         </label>
//         <label>
//           Role
//           <input
//             name="role"
//             type="text"
//             placeholder="Enter your role"
//             value={formState.role}
//             onChange={changeHandler}
//           />
//         </label>
//         <button
//           className="submitButton"
//         >Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Form
